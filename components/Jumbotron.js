import Link from "next/link";
import data from "../data/Jumbotron.json";

const Jumbotron = () => {
  return (
    <div className="container mx-auto my-2 -mb-2.5 py-20 bg-gradient-to-r from-blue-900 via-blue-400 to-green-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-white">{data.header}</h2>
        <h3 className="text-2xl mb-8 text-gray-200">{data.description}</h3>
        <Link href={data.link}>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;
