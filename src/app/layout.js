export const metadata = {
  title: 'Coding Learning Platform',
  description: 'Improve your skills by study with coding',
};

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
      </body>
    </html>
  );
}