import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600 inline-block text-left">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "red",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;