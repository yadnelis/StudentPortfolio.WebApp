export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en-US" | "de" }>;
}>) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  );
}
