import "./globals.css";
import "../i18n/i18n"; // ✅ make sure your translations initialize early
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Courier Connect | Fast & Reliable Deliveries",
  description: "Track shipments and manage deliveries easily.",
};

export default function RootLayout({ children }) {
  return (
    // ✅ Force browser to treat site as English
    <html lang="en">
      <head>
        {/* ✅ Prevent Chrome auto-translate popup */}
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className="bg-gray-50 text-gray-800" suppressHydrationWarning={true}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
