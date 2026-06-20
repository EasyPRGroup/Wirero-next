import "./global.css";
import Header from "../components/header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
