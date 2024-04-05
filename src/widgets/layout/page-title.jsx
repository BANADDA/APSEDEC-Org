import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="pb-10 mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h4" className="font-bold text-green-500 underline">
        {section}
      </Typography>
      <Typography variant="h3" color="blue-gray" className="my-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-800 font-semibold text-base">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
