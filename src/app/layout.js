import './globals.css'
import AppNav from '@/components/AppNav'
import { Footer } from '@/components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]["title"],
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: JSON[0]["image"],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='min-h-screen flex flex-col justify-between'>
          <div>
            <AppNav />
            {children}
          </div>

          <Footer />
        </div>

      </body>
    </html>
  )
}
