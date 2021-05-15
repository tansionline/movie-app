import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import Link from "next/link";
import data from "../data/HomePage.json";

export const getStaticProps = async () => {
  const populerAPI = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US&page=1"
  );

  const trendAPI = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=fb4727e57cf6241f7633a3a0486273da"
  );

  const popular = await populerAPI.json();
  const trend = await trendAPI.json();

  return {
    props: {
      popular: popular.results,
      trend: trend.results,
    },
  };
};

const Home = ({ popular, trend }) => {
  return (
    <div>
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Movie Database App" />
      </Head>

      <main>
        <div>
          <Jumbotron />
        </div>
        <div className="text-center my-20">
          <h1 className="font-bold text-4xl">{data.popularHeader}</h1>
        </div>
        <div className="container mx-auto flex overflow-x-scroll pb-10">
          <div className="flex flex-nowrap">
            {popular.map((popular) => (
              <Link href={"/details/" + popular.id} key={popular.id}>
                <div className="ml-5 w-64 h-128 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${popular.poster_path}`}
                  />

                  <h1 className="break-all">{popular.title}</h1>
                  <p>{popular.release_date}</p>
                  <p>{popular.vote_average}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center my-20">
          <h1 className="font-bold text-4xl">{data.trendsHeader}</h1>
        </div>
        <div className="container mx-auto flex overflow-x-scroll pb-10">
          <div className="flex flex-nowrap">
            {trend.map((trend) => (
              <Link href={"/details/" + trend.id} key={trend.id}>
                <div className=" ml-5 w-64 h-128 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${trend.poster_path}`}
                  />

                  <h1 className="break-all">{trend.name}</h1>
                  <h1 className="break-all">{trend.title}</h1>
                  <p>{trend.release_date}</p>
                  <p>{trend.vote_average}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
