import priv from "../public/assets/priv.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#5355AC !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const Navbar = () => {
  return (
    <div>
      <div className="px-5 md:px-32 py-[23px] md:py-[35px] shadow-md">
        <nav>
          <div className="container flex flex-wrap  justify-center items-center mx-auto">
            <Link href="/" className="flex self-center">
              <img
                src={priv.src}
                className="mr-3  self-center"
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
