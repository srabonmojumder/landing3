import '@/styles/globals.scss';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#073a21',
};

export const metadata = {
  title: 'স্বাস্থ্য সচেতন বাবা মায়ের প্রথম পছন্দ | প্রিমিয়াম ডেট জ্যাম (Date Jam)',
  description:
    '১০০% প্রাকৃতিক ও পুষ্টিকর উপাদান সমৃদ্ধ প্রিমিয়াম ডেট জ্যাম — শিশুর শারীরিক ও মানসিক বিকাশে আদর্শ পুষ্টির নির্ভরযোগ্য উৎস। সম্পূর্ণ চিনি ও প্রিজারভেটিভ মুক্ত।',
  keywords:
    'ডেট জ্যাম, Date Jam Bangladesh, খেঁজুরের জ্যাম, Organic Date Jam, শিশুর স্বাস্থ্যকর খাবার, চিনি ছাড়া জ্যাম, Swad Ghor Natural',
  openGraph: {
    title: 'স্বাস্থ্য সচেতন বাবা মায়ের প্রথম পছন্দ | প্রিমিয়াম ডেট জ্যাম',
    description:
      '১০০% প্রাকৃতিক ও পুষ্টিকর উপাদান সমৃদ্ধ প্রিমিয়াম ডেট জ্যাম — শিশুর সঠিক বিকাশ ও পারিবারিক পুষ্টির সমাধান।',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
