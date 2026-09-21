import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');

// List of all routes from sitemap.xml
const routes = [
  { slug: 'gst-calculator', title: 'GST Calculator Pakistan - Quick Tax Calculation' },
  { slug: 'loan-calculator', title: 'Loan Calculator Pakistan - Bank Loan & Monthly EMI' },
  { slug: 'emi-calculator', title: 'EMI Calculator - Equated Monthly Installments' },
  { slug: 'salary-calculator', title: 'Salary Calculator Pakistan - Take-Home Pay & Tax' },
  { slug: 'discount-calculator', title: 'Discount Calculator - Sale Savings & Final Price' },
  { slug: 'profit-loss-calculator', title: 'Profit & Loss Calculator - Margin & Percentage' },
  { slug: 'simple-interest-calculator', title: 'Simple Interest Calculator - Fast Principal & Rate' },
  { slug: 'compound-interest-calculator', title: 'Compound Interest Calculator - Wealth Growth' },
  { slug: 'percentage-calculator', title: 'Percentage Calculator - Quick Percent Math' },
  { slug: 'age-calculator', title: 'Age Calculator - Exact Age in Years, Months & Days' },
  { slug: 'time-date-calculator', title: 'Time & Date Duration Calculator' },
  { slug: 'unit-converter', title: 'Unit Converter - Marla, Kanal, Square Feet, Weight & Length' },
  { slug: 'bmi-calculator', title: 'BMI Calculator - Body Mass Index & Healthy Weight' },
  { slug: 'gpa-calculator', title: 'GPA & CGPA Calculator - University & College Grades' },
  { slug: 'percentage-to-marks-calculator', title: 'Percentage to Marks & Marks to Percentage Calculator' },
  { slug: 'about', title: 'About Us - Fast Calculator' },
  { slug: 'contact', title: 'Contact Us - Fast Calculator' },
  { slug: 'privacy-policy', title: 'Privacy Policy - Fast Calculator' },
  { slug: 'disclaimer', title: 'Disclaimer - Fast Calculator' },
  { slug: 'sitemap', title: 'HTML Sitemap - Fast Calculator' },
];

console.log(`Generating static route files for ${routes.length} routes...`);

for (const route of routes) {
  const routeDir = path.join(distDir, route.slug);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Inject route-specific title and canonical tag for search engine crawlers
  const routeCanonical = `https://discoverwithaly-rgb.github.io/fast-calculator/${route.slug}`;
  let routeHtml = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title} | Fast Calculator</title>`)
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace('</head>', `  <link rel="canonical" href="${routeCanonical}" />\n  </head>`);

  // 1. Write route/index.html (handles /fast-calculator/<route>/)
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');

  // 2. Write route.html (handles /fast-calculator/<route> without trailing slash on GitHub Pages)
  fs.writeFileSync(path.join(distDir, `${route.slug}.html`), routeHtml, 'utf8');
}

// Also ensure 404.html exists
fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

console.log('Static route files successfully generated!');
