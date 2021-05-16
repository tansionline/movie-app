import Link from "next/link";
import data from "../data/Header.json";
import logo from "../data/Assets.json";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <link rel="icon" href={logo.favicon} />
      </Head>
      <div className="container-xl p-12" id="headerBackground">
        <nav className="container mx-auto flex items-center p-3">
          <div className="justify-start w-5/12 sm:w-8/12">
            <Link href="/">
              <img
                className=""
                src={logo.headerLogo}
                width={150}
                height={150}
                alt="Headers Logo"
              ></img>
            </Link>
          </div>

          <div className="justify-end w-3/12 sm:w-2/12">
            <Link href="/">
              <a className="px-6 text-white font-bold hover:text-green-600">
                {data.home}
              </a>
            </Link>
          </div>

          <div className="justify-start w-3/12 sm:w-2/12">
            <Link href="/about">
              <a className="px-6 text-white font-bold hover:text-green-600">
                {data.about}
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
