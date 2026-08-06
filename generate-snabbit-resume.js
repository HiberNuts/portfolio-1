const path = require("path");
const fs = require("fs");
const os = require("os");
const puppeteer = require("puppeteer");

async function main() {
  const source = path.join(__dirname, "resumes", "Raghav_Jindal_Snabbit_Resume.html");
  const outputs = [
    path.join(__dirname, "Raghav_Jindal_Snabbit_Resume.pdf"),
    path.join(os.homedir(), "Downloads", "Raghav_Jindal_Snabbit_Resume.pdf"),
  ];
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${source}`, { waitUntil: "networkidle0" });
  const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();
  for (const output of outputs) fs.writeFileSync(output, pdf);
  console.log(outputs.join("\n"));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
