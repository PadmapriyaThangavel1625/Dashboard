import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,

            success: {
              style: {
                background: "#16a34a",
                color: "#fff",
                borderRadius: "12px",
              },
            },

            error: {
              style: {
                background: "#dc2626",
                color: "#fff",
                borderRadius: "12px",
              },
            },

            style: {
              borderRadius: "12px",
              fontSize: "15px",
            },
          }}
        />
      </body>
    </html>
  );
}