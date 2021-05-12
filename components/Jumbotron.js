import Link from "next/link";

const Jumbotron = () => {
  return (
    <div className="container mx-auto my-5 -mb-2.5 py-20 bg-gradient-to-r from-blue-900 via-blue-400 to-green-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">Welcome.</h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <Link href="https://www.themoviedb.org/">
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;
