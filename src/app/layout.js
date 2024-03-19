import { Inter } from "next/font/google";
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>The Binary Holdings</title>
        <meta name="description" content="The Binary Holdings" />
        {/* You can also include global meta tags, fonts, and stylesheets here */}
      </Head>
      <body className={inter.className}>
        <Navbar /> {/* Here's your navbar at the top */}
        <main className={inter.className}>{children}</main>
        <Footer /> {/* And your footer at the bottom */}
      </body>
    </>
  );
}
