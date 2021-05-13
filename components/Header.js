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
        <nav className="container mx-auto items-center flex-wrap p-3">
          <Link href="/">
            <img
              className="float-left justify-center items-center"
              src={logo.headerLogo}
              width={150}
              height={150}
              alt="Headers Logo"
            ></img>
          </Link>

          <Link href="/about">
            <a className="float-right justify-center items-center px-6 text-white font-bold hover:text-green-600">
              {data.about}
            </a>
          </Link>

          <Link href="/">
            <a className="float-right justify-center items-center px-6 text-white font-bold hover:text-green-600">
              {data.home}
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
