import data from "../data/Footer.json";
import logo from "../data/Assets.json";

const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-red-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <img src={logo.footerLogo} width={250} height={250} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Social Media
              </span>
              {data.middle.map((middle) => (
                <span className="my-2" key={middle.id}>
                  <a
                    href={middle.link}
                    target="_blank"
                    className="text-green-500	  text-md hover:text-red-500"
                  >
                    {middle.name}
                  </a>
                </span>
              ))}
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Social Media
              </span>
              {data.right.map((right) => (
                <span className="my-2" key={right.id}>
                  <a
                    href={right.link}
                    target="_blank"
                    className="text-green-500	 text-md hover:text-red-500"
                  >
                    {right.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-red-600 font-bold mb-2">Coded with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
