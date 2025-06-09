import localFont from 'next/font/local';

// Define the AvertaStd font family
export const avertaStd = localFont({
  src: [
    {
      path: '../public/fonts/AvertaStd-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvertaStd-Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-averta',
  display: 'swap'
});
