import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return<>
  <div> 
  <Navbar/>
  </div>
  <Component {...pageProps} />;
  </> 
   
}
