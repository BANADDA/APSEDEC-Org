import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-3/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-200">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-35 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target={item.target}
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-100 hover:text-blue-gray-300"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-300"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "ACHOLI PRIVATE SECTOR DEVELOPMENT COMPANY LIMITED",
  description:
    "Fostering Growth for local communities since 1999.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      // path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      // path: "https://www.twitter.com/creativetim",
    },
    {
      color: "purple",
      name: "instagram",
      // path: "https://www.instagram.com/creativetimofficial/",
    },
    // {
    //   color: "pink",
    //   name: "dribbble",
    //   path: "https://www.dribbble.com/creativetim",
    // },
    {
      color: "red",
      name: "youtube",
      // path: "",
    },
    // {
    //   color: "black",
    //   name: "github",
    //   path: "https://github.com/creativetimofficial/material-tailwind",
    // },
  ],
  menus: [
    {
      name: "Useful Links",
      items: [
        { name: "About Us", path: "/about-us" },
        // { name: "Blog", path: "/" },
        {
          name: "Our Programs",
          path: "/profile",
        },
        {
          name: "Contact Us",
          path: "/contact",
        },
        // {
        //   name: "Free Products",
        //   path: "https://www.creative-tim.com/templates/free?ref=mtk",
        // },
      ],
    },
    {
      name: "Get In Touch",
      items: [
        {
          name: "P.O. Box: 374, Kitgum,  Uganda",
          // path: "/",
          // path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "EMAIL :  apsedec2006@yahoo.co.uk",
          path: "apsedec2006@yahoo.co.uk",
        },
        // {
        //   name: "Change Log",
        //   path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        // },
        {
          name: "CALL: +256 777 4505904",
          // path: "/",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} APSEDEC
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;