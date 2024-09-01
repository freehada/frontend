import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

export default function HomeRootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="h-screen h-700:h-auto w-screen flex flex-col overflow-hidden">
      <Header />
      {/* border-l-1 border-r-1 shadow-2xl 테스트환경에서만 쓸값임 */}
      <section className="grow h-700:h-screen layout-container bg-netural-100 border-l-1 border-r-1 shadow-2xl">
        {children}
      </section>
      <Footer />
    </section>
  );
}
