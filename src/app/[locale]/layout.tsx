import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import { Toaster } from 'react-hot-toast';

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Toaster position="top-center" />
      <header className="sticky top-0 z-49">
        <Navbar />
      </header>
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
} 