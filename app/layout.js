import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head"; // Import the Head componentt";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:  "رسام نقش آناهیتا",
  description: "طراحی فلکوگرافی وکلیشه",
  verification: {
    google: "i7HMNYi874e5sKI5t0b9HLw-PMoXPc8SIc9X5C3ERHw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir={"rtl"}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"
          integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css"/>
        <link rel="stylesheet" href="path/to/atropos.css" />
      </Head>
      {/* <Script src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"></Script> */}
      <body className={inter.className}>
     
        {children}
       
      
        </body>
    </html>
  );
}
