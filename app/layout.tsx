import "./global.css";
import Header from "../components/header";
import ScrollToTop from "../components/scroll-to-top";

export const metadata = {
  title: `Wirero`,
  icons: {
    icon: "/Wirero-main-1@2x.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="site-page-frame">
          <Header />
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
