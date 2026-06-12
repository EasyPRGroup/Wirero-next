/*
 * Font Configuration for Wirero
 * 
 * This file configures local fonts for optimized loading with next/font/local.
 * 
 * IMPORTANT: Proxima Nova is a commercial font. You must have a valid license
 * to use these font files legally.
 * 
 * To enable next/font/local optimization:
 * 1. Add Proxima Nova font files to /public/fonts/ directory
 * 2. Uncomment the font configuration below
 * 3. Import and use in layout.tsx
 * 
 * Required font files:
 * - ProximaNova-Regular.ttf (or .woff/.woff2)
 * - ProximaNova-Medium.ttf
 * - ProximaNova-Semibold.ttf
 * - ProximaNova-Bold.ttf
 */

// import localFont from 'next/font/local';

// export const proximaNova = localFont({
//   src: [
//     {
//       path: '../public/fonts/ProximaNova-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/ProximaNova-RegularIt.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../public/fonts/ProximaNova-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/ProximaNova-MediumIt.woff2',
//       weight: '500',
//       style: 'italic',
//     },
//     {
//       path: '../public/fonts/ProximaNova-Semibold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/ProximaNova-SemiboldIt.woff2',
//       weight: '600',
//       style: 'italic',
//     },
//     {
//       path: '../public/fonts/ProximaNova-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/ProximaNova-BoldIt.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//     {
//       path: '../public/fonts/ProximaNova-Extrabld.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-proxima',
//   display: 'swap',
//   preload: true,
//   fallback: ['Arial', 'sans-serif'],
// });

// To use in layout.tsx:
// import { proximaNova } from './fonts';
// Apply className={proximaNova.variable} to html or body element

export const fontConfig = {
  fontFamily: 'var(--font-proxima)',
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};
