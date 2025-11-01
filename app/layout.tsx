import '@/app/ui/global.css';
import localFont from 'next/font/local'
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'okay',
  description: '...',
}


 
const InterFont = localFont({
  src: [
    {
      path: '../public/assets/fonts/Inter-VariableFont_opsz\,wght.woff2',
      style: 'normal',
      weight:"100 1000",
    },
    {
      path: '../public/assets/fonts/Inter-Italic-VariableFont_opsz\,wght.woff2',
      style: 'italic',
    },
  ],
  fallback: [
    "Verdana",
  ],
  preload:true,
});
 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={InterFont.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
