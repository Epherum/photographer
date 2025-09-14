import localFont from 'next/font/local'

// Silk Serif font family (elegant serif)
export const silk = localFont({
  src: [
    {
      path: '../../public/fonts/silk/SilkSerif-ExtraLightItalic.ttf',
      weight: '200',
      style: 'extra light italic',
    },
    {
      path: '../../public/fonts/silk/SilkSerif-ExtraLight.ttf',
      weight: '200',
      style: 'extra light',
    },
    {
      path: '../../public/fonts/silk/SilkSerif-LightItalic.ttf',
      weight: '300',
      style: 'light italic',
    },
    {
      path: '../../public/fonts/silk/SilkSerif-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/silk/SilkSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/silk/SilkSerif-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-silk',
  display: 'swap',
})

// Nunito font family (sans-serif for body text)
export const nunito = localFont({
  src: [
    {
      path: '../../public/fonts/nunito/Nunito-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/nunito/Nunito-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/nunito/Nunito-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-nunito',
  display: 'swap',
})