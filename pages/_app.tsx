import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import favico from "../public/icons/favicon.ico";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Beauty Forecast</title>
        <link rel="icon" type="image/x-icon" href={favico.src} />
      </Head>
      <div className={montserrat.className}>
        <main className="w-full overflow-hidden gif-background">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default App;
