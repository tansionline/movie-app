import Link from "next/link";

function Header() {
  return (
    <div className="container-xl p-12" id="headerBackground">
      <nav className="container mx-auto items-center flex-wrap p-3">
        <Link href="/">
          <img
            className="float-left justify-center items-center"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width={150}
            height={150}
            alt="logo"
          ></img>
        </Link>

        <Link href="/about">
          <h1 className="float-right justify-center items-center px-6 rounded text-white hover:bg-green-600 hover:text-white">
            About
          </h1>
        </Link>

        <Link href="/">
          <h1 className="float-right justify-center items-center px-6 rounded text-white hover:bg-green-600 hover:text-white">
            Home
          </h1>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
