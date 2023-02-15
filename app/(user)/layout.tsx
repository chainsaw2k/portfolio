import "../../styles/globals.css";
import Header from "../../components/Header"
import { AnalyticsWrapper } from "../components/analytics";

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
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
