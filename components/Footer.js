const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-red-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                width={250}
                height={250}
              ></img>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Social Media
              </span>
              <span className="my-2">
                <a
                  href="https://github.com/tansionline"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  GitHub
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://gitlab.com/tansionline"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  GitLab
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://tansionline.medium.com/"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  Medium
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Social Media
              </span>
              <span className="my-2">
                <a
                  href="https://www.linkedin.com/in/selcuk-tatar/"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://twitter.com/tansionline"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Twitter
                </a>
              </span>
              <span className="my-2">
                <a
                  href="mailto:selcuk.tatar@outlook.com"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Email
                </a>
              </span>
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
