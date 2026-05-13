const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const APP = "http://localhost:3000";
const OUT = path.join(__dirname, "../screenshots");

const DIRECTOR = { email: "chris@touzeauconsulting.com", password: "1234567890" };
const STUDENT  = { email: "touzeauc@gmail.com",          password: "1234567890" };
const COHORT_ID = "3b22dfc5-a544-4cdb-9d47-c0217051dd37";
const STUDENT_PROFILE_ID = "adae591c-5e3f-48ed-a6a2-ce191c973d18";

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

async function hideBanner(page) {
  await page.addStyleTag({
    content: `
      div[style*="#dc2626"],
      div[style*="dc2626"],
      div[style*="rgb(220, 38, 38)"] {
        display: none !important;
      }
    `,
  });
}

async function login(page, creds) {
  await page.goto(`${APP}/login`);
  await page.waitForLoadState("networkidle");
  await page.fill('input[type="email"]', creds.email);
  await page.fill('input[type="password"]', creds.password);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000);
  await page.waitForLoadState("networkidle");
  if (page.url().includes("setup")) {
    await page.goto(`${APP}/dashboard`);
    await page.waitForLoadState("networkidle");
  }
}

async function shot(page, name, waitFor) {
  await hideBanner(page);
  if (waitFor) await page.waitForSelector(waitFor, { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: false });
  console.log(`✓ ${name}.png`);
}

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 860 } });
  const page = await ctx.newPage();

  // ── DIRECTOR SCREENSHOTS ──
  console.log("\n→ Logging in as program director…");
  await login(page, DIRECTOR);

  // 1. Director dashboard
  await page.goto(`${APP}/dashboard`);
  await page.waitForLoadState("networkidle");
  await shot(page, "01-director-dashboard", "main");

  // 2. Student list (cohort view)
  await page.goto(`${APP}/admin/cohorts/${COHORT_ID}/students`);
  await page.waitForLoadState("networkidle");
  await shot(page, "02-student-list", "table, [class*='student'], main");

  // 3. Rotation slots management
  await page.goto(`${APP}/admin/rotations/slots`);
  await page.waitForLoadState("networkidle");
  await shot(page, "03-rotation-slots", "main");

  // 4. Staff review / submissions
  await page.goto(`${APP}/staff/review`);
  await page.waitForLoadState("networkidle");
  await shot(page, "04-staff-review", "main");

  // ── STUDENT SCREENSHOTS ── (fresh context, no session bleed)
  await ctx.close();
  const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 860 } });
  const spage = await ctx2.newPage();
  console.log("\n→ Logging in as student…");
  await login(spage, STUDENT);

  // 5. Student dashboard
  await spage.goto(`${APP}/dashboard`);
  await spage.waitForLoadState("networkidle");
  await shot(spage, "05-student-dashboard", "main");

  // 6. Shift log list
  await spage.goto(`${APP}/summative`);
  await spage.waitForLoadState("networkidle");
  await shot(spage, "06-shift-log-list", "main");

  // 7. Rotation booking view
  await spage.goto(`${APP}/rotations`);
  await spage.waitForLoadState("networkidle");
  await shot(spage, "07-rotation-booking", "main");

  await ctx2.close();
  await browser.close();
  console.log(`\nDone — screenshots saved to ${OUT}`);
})();
