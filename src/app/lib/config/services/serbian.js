import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { serbian as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Europe/London';

const service = {
  lang: `sr-Latn`,
  articleAuthor: `https://www.facebook.com/BBCNewsnasrpskom`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-serbian',
  atiAnalyticsProducerId: '81',
  brandName: 'BBC News na srpskom',
  product: 'BBC News na srpskom',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/serbian.png',
  defaultImageAltText: 'BBC News na srpskom',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `sr-Latn`,
  datetimeLocale: `sr-Latn`.toLowerCase(),
  service: 'serbian',
  serviceName: 'News na srpskom',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcnasrpskom',
  twitterSite: '@bbcnasrpskom',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  frontPageTitle: 'Početna strana',
  translations: {
    home: 'Home',
    currentPage: 'Current page',
    skipLinkText: 'Skip to content',
    error: {
      404: {
        statusCode: '404',
        title: '404 - Stranica nije pronađena',
        message:
          'Razlog može biti što ste veb-adresu uneli pogrešno. Proverite adresu i da li ima grešaka u kucanju.',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC News početna stranica',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/serbian',
      },
      500: {
        statusCode: '500',
        title: '500 - Greška',
        message: 'Došlo je do greške. Osvežite stranicu',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC News početna stranica',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/serbian',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: 'Zvuk',
      photogallery: 'Galerija slika',
      video: 'Video',
    },
  },
  brandSVG,
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Read about our approach to external linking.',
    },
    links: [
      {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      {
        href: 'https://www.bbc.com/terms',
        text: 'Terms of Use',
      },
      {
        href: 'https://www.bbc.co.uk/aboutthebbc/',
        text: 'About the BBC',
      },
      {
        href: 'https://www.bbc.com/privacy/',
        text: 'Privacy Policy',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.com/accessibility/',
        text: 'Accessibility Help',
      },
      {
        href: 'https://www.bbc.com/contact/',
        text: 'Contact the BBC',
      },
    ],
    copyrightText:
      'BBC. BBC nije odgovoran za sadržaj sajtova sa spoljnih linkova',
  },
  fonts: [],
  timezone: 'Europe/London',
};

export default service;
