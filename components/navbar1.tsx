import priv from "../public/assets/priv.svg";
import Link from "next/link";



const Navbar = () => {
  return (
    <div>
      <div className="px-5 md:px-32 py-[21px] md:py-[24px] shadow-md">
        <nav>
          <div className="container flex flex-wrap  justify-center items-center mx-auto">
            <Link href="/" className="flex self-center">
              <img
                src={priv.src}
                className="self-center"
                alt="Priv health logo"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
