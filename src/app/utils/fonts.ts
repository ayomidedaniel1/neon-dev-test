import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    { path: '../../../public/fonts/Satoshi-Regular.woff2', weight: '400', },
    { path: '../../../public/fonts/Satoshi-Medium.woff2', weight: '500', },
    { path: '../../../public/fonts/Satoshi-Bold.woff2', weight: '700', },
  ],
  variable: '--font-satoshi',
});


const monument = localFont({
  src: [
    { path: '../../../public/fonts/MonumentExtended-Regular.woff2', weight: '400', },
  ],
  variable: '--font-monument',
});

export {
  satoshi,
  monument
};