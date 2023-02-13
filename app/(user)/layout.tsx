import "../../styles/globals.css";
import Header from "../../components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
