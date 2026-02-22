import "./globals.css";

export const metadata = {
  title: "BLACKRAIN - Coming Soon",
  description: "The Future of Aerial Innovation Is Arriving."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
