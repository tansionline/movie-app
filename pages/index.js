import Head from "next/head";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Movie Database App" />
        <link
          rel="icon"
          href="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        />
      </Head>

      <main>
        <Jumbotron />
      </main>
    </div>
  );
}
