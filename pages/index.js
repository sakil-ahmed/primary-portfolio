import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Clients from "../components/sections/clientSection/clients";
import Hero from "../components/sections/hero/hero";
import Portfolio from "../components/sections/portfolio/portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sakil Ahmed </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Portfolio />
        {/* <Process />
        <AwardSection /> */}
        <Clients />
        <Footer />
      </main>
    </div>
  );
}
