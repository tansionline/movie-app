import config from "../../configs/config.json";
import movieService from "../../services/movieService.js";
import Head from "next/head";

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

        movie_data.videos = await fetch(
          `${ApiUrl.replace("{{endpoint}}", `/movie/${movie_id}/videos`)}`
        )
          .then(async (response) => await response.json())
          .then((data) => {
            return data.results;
          });

        movie_data.credits = movieService.getCredits(movie_id);

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
        keywords: movie_data.keywords,
      },
    };
  } else {
    return { notFound: true };
  }
}

const Details = ({
  popular,
  videos,
  production_companies,
  credits,
  keywords,
  categories,
}) => {
  return (
    <>
      <Head>
        <title>{popular.original_title}</title>
      </Head>
      <div>
        <h1>Adi: {popular.original_title}</h1>
        <p>Ozeti: {popular.overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/w185${popular.poster_path}`}
          onerror="this.style.display='none'"
        />
        <img
          src={`https://image.tmdb.org/t/p/w185${popular.backdrop_path}`}
          onerror="this.style.display='none'"
        />
        <p>
          Kategoriler:{" "}
          <ul>
            {categories?.map((category) => (
              <li>{category.name}</li>
            ))}
          </ul>
        </p>
        <p>
          Yapımcılar:{" "}
          <ul>
            {production_companies?.map((producer) => (
              <li>{producer.name}</li>
            ))}
          </ul>
        </p>
        <p>
          Videolar:{" "}
          <ul>
            {videos?.map((video) => (
              <li>{video.site}</li>
            ))}
          </ul>
        </p>
        <p>Tarih: {popular.release_date}</p>
        <p>Ortalama Puan: {popular.vote_average}</p>
        <p>
          Oyuncular:{" "}
          <ul>
            {Array.isArray(credits) &&
              credits?.map((cast) => <li>{cast.name}</li>)}
          </ul>
        </p>

        <p>
          Etiketler:{" "}
          <ul>
            {keywords?.map((keyword) => (
              <li>{keyword.name}</li>
            ))}
          </ul>
        </p>
      </div>
    </>
  );
};

export default Details;
