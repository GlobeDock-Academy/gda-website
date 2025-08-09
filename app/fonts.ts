import localFont from 'next/font/local';

// Define the Montserrat variable font
export const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-VariableFont_wght.ttf',
      style: 'normal',
    }
  ],
  variable: '--font-montserrat',
  display: 'swap'
});

// Define the Mulish variable font
export const mulish = localFont({
  src: [
    {
      path: '../public/fonts/Mulish-VariableFont_wght.ttf',
      style: 'normal',
    }
  ],
  variable: '--font-mulish',
  display: 'swap'
});

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

// Define the Daily Memo font family
export const dailyMemo = localFont({
  src: [
    {
      path: '../public/fonts/Daily Memo.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-daily-memo',
  display: 'swap'
});

// Define the Lato font family
export const lato = localFont({
  src: [
    {
      path: '../public/fonts/Lato-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-lato',
  display: 'swap'
});

// Define the Times New Roman font family
export const timesNewRoman = localFont({
  src: [
    {
      path: '../public/fonts/Times New Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Times New Roman Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Times New Roman Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Times New Roman Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-times-new-roman',
  display: 'swap'
});

// Define the ShantellSans font family
export const shantellSans = localFont({
  src: [
    {
      path: '../public/fonts/ShantellSans.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-shantell-sans',
  display: 'swap'
});
