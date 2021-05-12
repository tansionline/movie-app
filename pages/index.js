import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US&page=1"
  );
  const data = await res.json();

  return {
    props: { data: data.results },
  };
};

const Home = ({ data }) => {
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
        <div>
          <Jumbotron />
        </div>
        <div className="text-center my-20">
          <h1 className="font-bold text-4xl">Populer Movies</h1>
        </div>
        <div className="container mx-auto">
          <div className="flex overflow-x-auto">
            {data.map((data) => (
              <div className="p-12">
                <Link href={"/" + data.id} key={data.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                    width={1000}
                    height={1000}
                  />
                </Link>

                <h1 className="break-all">{data.title}</h1>
                <p>{data.release_date}</p>
                <p>{data.vote_average}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
