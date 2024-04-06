import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Navbar as MTNavbar,
  MobileNav,
  Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar({ logo, brandName1, brandName2, brandName3, brandName4, brandName5, brandName6, brandName7, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1145 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize hover:text-green-700 font-semibold text-base"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-normal"
                smooth={true}
                duration={500}
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-3 pb-0.5 bg-white border-0 h-16">
      <div className="container mx-auto flex items-center justify-between text-black text-6xl font-bold">
        <Link to="/">
          <div className="flex items-center">
            {logo}
            <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-extrabold flex align-middle gap-2 text-xl">
              {brandName1}{brandName2}S{brandName4}{brandName5}{brandName6}{brandName7}
            </Typography>
          </div>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex text-6xl">
          <a
            href="#"
            target="_blank"
          >
            {/* <Button variant="text" size="sm" color="white" fullWidth>
              Support Us
            </Button> */}
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="lg"
          color="green"
          className="ml-auto text-inherit hover:bg-green-700 focus:bg-green-700 active:bg-green-700  lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-green-400"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          <a
            href="#"
            target="_blank"
            className="mb-2 block"
          >
            {/* <Button variant="text" size="sm" fullWidth>
              pro version
            </Button> */}
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  logo: (
    <img
      className="w-[33px] h-[35px] p-0"
      src='/img/badge.png'
      alt="Logo"
    />
  ),
  brandName1: "A",
  brandName2: "P",
  brandName3: "S",
  brandName4: "E",
  brandName5: "D",
  brandName6: "E",
  brandName7: "C",
  action: (
    <Link
      to="/"
      target=""
    >
      <Button className=" from-green-800 to-green-800 shadow-md shadow-green-800/20 hover:shadow-lg hover:shadow-green-700/40 active:opacity-[0.85] block w-full" variant="gradient" size="sm" fullWidth>
        Contact Us
      </Button>
    </Link>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
