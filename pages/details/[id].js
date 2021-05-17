import config from "../../configs/config.json";
import Head from "next/head";
import moment from "moment";

const ApiUrl = `${config.apiUrl}{{endpoint}}?api_key=${config.apiKey}&language=${config.apiLanguageKey}`;

export async function getServerSideProps(context) {
  let movie_data = {};
  const movie_id = context.query.id;

  await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US`
  )
    .then((response) => response.json())
    .then(async (data) => {
      if (data && data.success != false) {
        movie_data.success = true;
        movie_data.detail = data;

        // Example Video Endpoint Url: https://api.themoviedb.org/3/movie/567189/videos?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US

        movie_data.videos = await fetch(
          `${ApiUrl.replace("{{endpoint}}", `/movie/${movie_id}/videos`)}`
        )
          .then(async (response) => await response.json())
          .then((data) => {
            return data.results;
          });

        // Example Cast Endpoint Url: https://api.themoviedb.org/3/movie/567189/credits?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US

        movie_data.credits = await fetch(
          `${ApiUrl.replace("{{endpoint}}", `/movie/${movie_id}/credits`)}`
        )
          .then(async (response) => await response.json())
          .then((data) => {
            return data.cast;
          });

        // Example Keywords Endpoint Url: https://api.themoviedb.org/3/movie/567189/keywords?api_key=fb4727e57cf6241f7633a3a0486273da&language=en-US

        movie_data.keywords = await fetch(
          `${ApiUrl.replace("{{endpoint}}", `/movie/${movie_id}/keywords`)}`
        )
          .then(async (response) => await response.json())
          .then((data) => {
            return data.keywords;
          });
      } else {
        movie_data.success = false;
      }
    });

  if (movie_data.success) {
    return {
      props: {
        popular: movie_data.detail,
        categories: movie_data.detail.genres,
        production_companies: movie_data.detail.production_companies,
        videos: movie_data.videos,
        credits: movie_data.credits,
        keywords: movie_data.keywords,
      },
    };
  } else {
    return { notFound: true };
  }
}

const Details = ({
  popular,
  categories,
  production_companies,
  videos,
  credits,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{popular.original_title}</title>
      </Head>

      <div
        className="bg-black bg-cover bg-center bg-no-repeat mt-12 bg-gradient-to-b from-gray-600 via-gray-500 to-transparent"
        style={{
          background: `linear-gradient(to right, rgba(11.76%, 11.37%, 13.73%, 1.00) 150px, rgba(11.76%, 11.37%, 13.73%, 0.84) 100%),
           url(  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${popular.backdrop_path}")`,
        }}
      >
        <div className="container flex flex-wrap mx-auto p-12">
          <div className="flex mb-4 w-full sm:w-full md:w-full lg:w-4/12 lg:justify-start xl:10/12 xl:justify-center 2xl:8/12 2xl:justify-center ">
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images-na.ssl-images-amazon.com/images/I/11W3VnNMHPL.SR160,240_BG243,243,243.jpg";
              }}
              className="rounded w-8/12 sm:w-8/12 md:w-6/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 ml-10"
              src={`https://image.tmdb.org/t/p/w185${popular.poster_path}`}
            />
          </div>
          <div className="w-full sm:w-10/12 md:w-7/12 lg:w-6/12 xl:6/12 2xl:4/12  text-white ml-10">
            <h1 className="text-4xl font-bold	mb-2">{popular.original_title}</h1>
            <p>
              {moment(popular.release_date).format("MMM DD, YYYY")} |{" "}
              <span>
                {categories?.map((category, index) => (
                  <a key={index}>{category.name} </a>
                ))}
              </span>{" "}
            </p>
            <p>
              User Score: <span> {popular.vote_average} </span>
            </p>
            <div className="mb-2 mt-4">
              <h1 className="text-xl">Overview:</h1>
              <p>{popular.overview}</p>
            </div>
            <div className="mb-3">
              <p>
                Keywords:{" "}
                {keywords?.map((keyword) => (
                  <a key={keyword.id}>#{keyword.name} </a>
                ))}
              </p>
            </div>
            <div>
              <h1 className="text-xl">Producer</h1>
              {production_companies.map((producer) => (
                <a key={producer.id} className="break-all mr-2 ">
                  {producer.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-20">
          <h1 className="font-bold text-4xl">Casts</h1>
        </div>
        <div className="container mx-auto flex overflow-x-scroll pb-10">
          <div className="flex flex-nowrap">
            {credits.map((cast) => (
              <div
                className="ml-3 w-40 h-128 max-w-xs overflow-hidden"
                key={cast.id}
              >
                <img
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images-na.ssl-images-amazon.com/images/I/11W3VnNMHPL.SR160,240_BG243,243,243.jpg";
                  }}
                  src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                />
                <p className="break-all font-bold mb-1">{cast.original_name}</p>
                <p className="break-all">{cast.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-20">
          <h1 className="font-bold text-4xl">Videos</h1>
        </div>
        <div className="container mx-auto flex overflow-x-scroll pb-10">
          <div className="flex flex-nowrap">
            {videos.map((video) => (
              <div
                id="video-container"
                className="ml-3 w-full h-full overflow-hidden"
                key={video.id}
              >
                <iframe
                  className="mb-5"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  width="800"
                  height="500"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="break-all font-bold mb-10">{video.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
