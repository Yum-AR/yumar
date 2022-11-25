import React from 'react';
import { LocationIcon, ARIcon, QRIcon, CameraIcon, DeviceIcon } from '../icons/icons';

// HeroSection page navigation
export const navigationHero = [
  { name: `Find a Restaurant`, href: `#` },
  { name: `Features`, href: `#` },
  { name: `About Us`, href: `#` },
];

export const communicationFeatures = [
  {
    id: 1,
    name: `Turn Dishes into 3D Models`,
    description:
      `Bring your food to life by digitizing your menu using our scanning feature. 
      Turn your phone into a photogrammetry device, capturing every detail of your dish.`,
    icon: <CameraIcon />,
  },
  {
    id: 2,
    name: `Multiple Mediums of Access`,
    description:
      `View Yummr on various platforms, from our web app, iOS app, scanning a QR code - to viewing the menu. `,
    icon: <DeviceIcon />,
  },
];
export const transferFeatures = [
  {
    id: 1,
    name: `Restaurants For You`,
    description:
      `View restaurants in your area with ease. Get suggestions based on what foods you 
      like. Explore new foods around you. Add dishes to your taste list to come back to later. `,
    icon: <LocationIcon />,
  },
  {
    id: 2,
    name: `See Before You Eat`,
    description:
      `View dishes as 3D models and Augmented Reality. Understand
       and know exactly what you should be getting when you order your dish.`,
    icon: <ARIcon />,
  },
  {
    id: 3,
    name: `QR Code Menus`,
    description:
      `View menus utilizing QR Codes. Experience a true augmented reality
       experience with ease, no app download required. Though we do have one ;) `,
    icon: <QRIcon />,
  },
];
// web dashboard sidebar navigation

export const sortOptions = [
  { name: `Most Popular`, href: `#`, current: true },
  { name: `Best Rating`, href: `#`, current: false },
  { name: `Recommended`, href: `#`, current: false },
  { name: `Closest`, href: `#`, current: false },

];

export const filters = [
  {
    id: `cuisine_type`,
    name: `Cuisine`,
    options: [
      { value: `sandwiches`, label: `Sandwiches`, checked: false },
      { value: `mexican`, label: `Mexican`, checked: false },
      { value: `italian`, label: `Italian`, checked: false },
      { value: `fastFood`, label: `Fast Food`, checked: false },
      { value: `bakeries`, label: `Bakeries`, checked: false },
    ],
  },
  {

    id: `features`,
    name: `Features`,
    options: [
      { value: `wifi`, label: `Free Wifi`, checked: false },
      { value: `outdoor`, label: `Outdoor Seating`, checked: false },
      { value: `reservations`, label: `Reservations`, checked: false },
      { value: `wheelchair`, label: `Wheelchair Accessible`, checked: false },
    ],
  },
  {
    id: `Price`,
    name: `Price Range`,
    options: [
      { value: `low`, label: `Low ($10-15)`, checked: false },
      { value: `medium`, label: `Medium ($20-30)`, checked: false },
      { value: `high`, label: `High ($40+)`, checked: false },
    ],
  },
  {
    id: `dietary`,
    name: `Dietary`,
    options: [
      { value: `vegetarian`, label: `Vegetarian`, checked: false },
      { value: `vegan`, label: `Vegan`, checked: false },
      { value: `gluten-free`, label: `Gluten-free`, checked: false },
      { value: `vegan`, label: `Vegan`, checked: false },
      { value: `halal`, label: `Halal`, checked: false },
      { value: `kosher`, label: `Kosher`, checked: false },
    ],
  },
];
// Footer Constants
export const footerNavigation = {
  main: [
    { name: `Home`, href: `#` },
    { name: `About Us`, href: `#` },
    { name: `Email`, href: `mailto:support@yummr.io` },
    { name: `Blog`, href: `#` },
    { name: `Beta App`, href: `https://testflight.apple.com/join/TgQkBRsg` },
    // {name: 'Jobs', href: '#' },
    // {name: 'Press', href: '#' },
    // {name: 'Accessibility', href: '#' },
    // {name: 'Partners', href: '#' },
    // {name: 'Location', href: '#' },
  ],
  social: [
    {
      name: `Facebook`,
      href: `#`,
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) =>
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438
            9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195
            2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343
            21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ,
    },
    {
      name: `Instagram`,
      href: `#`,
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) =>
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049
            1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416
            1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218
             1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772
             1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
             0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902
              4.902 0 01-1.772-1.153 4.902 4.902 0
              01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.
              06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.
              636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456
              0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.
              748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.
              058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.
              882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.
              207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.
              048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097
              3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807
              -.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0
              100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ,
    },
    {
      name: `Twitter`,
      href: `#`,
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) =>
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.
          012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0
          001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743
          11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072
          0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07
          4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ,
    },
    {
      name: `Linkedin`,
      href: `#`,
      icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) =>
        <svg fill="currentColor" viewBox="0 0 448 512" {...props}>
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09
          108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1
          54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29
          0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5
          42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      ,
    },


  ],
};