import { AppProps } from "next/app";
//import "globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Hi I am here</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
