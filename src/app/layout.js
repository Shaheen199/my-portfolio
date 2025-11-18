
import "./globals.css";

export const metadata = {
  title: "Shaheen Munaz — Portfolio",
  description: "Software Engineering Undergraduate • Full‑Stack Developer • UI/UX Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
