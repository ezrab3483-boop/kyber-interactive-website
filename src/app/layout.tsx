import "./globals.css";

export const metadata = {
  title: "Kyber Interactive",
  description: "We build next-generation multiplayer experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}