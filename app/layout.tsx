import "../styles/globals.css";
import Layout from "~/components/Layout";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
