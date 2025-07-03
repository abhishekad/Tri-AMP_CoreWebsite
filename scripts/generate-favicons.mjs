import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Create output directory if it doesn't exist
await mkdir(publicDir, { recursive: true });

const inputFile = join(publicDir, 'images', 'triamp_no_bg_logo.png');

// Define favicon sizes and filenames
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 64, name: 'favicon.ico' },
];

// Create OG image (social media preview)
const ogImage = {
  width: 1200,
  height: 630,
  name: 'og-image.jpg',
};

console.log('Generating favicons...');

// Process each favicon size
await Promise.all(
  faviconSizes.map(async ({ size, name }) => {
    const outputPath = join(publicDir, name);
    
    if (name.endsWith('.ico')) {
      // For .ico files, we'll generate a PNG and then convert it to ICO using a different approach
      const pngBuffer = await sharp(inputFile)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
      
      // For now, we'll just save it as a PNG and you can convert it to ICO manually
      // or use a different library that supports ICO generation
      await sharp(pngBuffer)
        .toFile(outputPath.replace('.ico', '.png'));
      console.log(`Note: Please convert ${outputPath.replace('.ico', '.png')} to .ico format using an online converter`);
    } else {
      await sharp(inputFile)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(outputPath);
    }
    
    console.log(`Generated: ${name}`);
  })
);

// Generate OG image with a nice background
console.log('Generating OG image...');
const ogOutputPath = join(publicDir, ogImage.name);

// Create a gradient background
const gradient = Buffer.from(
  `<svg width="${ogImage.width}" height="${ogImage.height}">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a237e;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0d47a1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
  </svg>`
);

// Add logo to the OG image
const logoSize = Math.min(ogImage.width, ogImage.height) * 0.7;
const logoX = (ogImage.width - logoSize) / 2;
const logoY = (ogImage.height - logoSize) / 2;

const logo = await sharp(inputFile)
  .resize(Math.round(logoSize), Math.round(logoSize), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp(gradient)
  .composite([
    {
      input: logo,
      top: Math.round(logoY),
      left: Math.round(logoX),
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(ogOutputPath);

console.log(`Generated: ${ogImage.name}`);
console.log('\n✅ All favicons and images generated successfully!');
console.log('Favicons are ready in the public/ directory.');
console.log('Make sure to update the HTML with the correct paths if needed.');
