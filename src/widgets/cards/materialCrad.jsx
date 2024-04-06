import {
    StarIcon
} from "@heroicons/react/24/solid";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const MaterialCard = ({img, title, description }) => {
  return (
    <Card className="flex w-full max-w-[20rem] rounded-md pb-2 font-sans shadow-lg transition duration-300 ease-in-out hover:scale-105 md:max-w-[60rem] md:flex-row md:p-5 lg:max-w-[72rem] lg:p-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="w-18rem m-0 h-full p-0 md:max-w-[30rem] lg:max-w-[34rem]"
      >
        <img
          src={img}
          alt={title}
          className="m-0 h-56 w-full scale-100 transform !rounded-none object-cover object-center p-0"
        />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <i className="fa-solid fa-bullseye fa-lg h-6 w-6 font-semibold" />
        </IconButton>
        <Typography className="bg-coral font-bolder !absolute top-44 left-4 -mt-6 rounded-md px-4 py-1 text-lg font-semibold uppercase text-white md:hidden">
          ESA
        </Typography>
      </CardHeader>
      <div className="flex flex-col">
        <CardBody className="pb-3 font-bold md:max-w-[30rem] lg:max-w-[38rem]">
          <div className="mb-0 flex items-center justify-between">
            <Typography variant="h5" color="black" className="font-bolder">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-0.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-3 w-3 text-red-700" />
              <StarIcon className="-mt-0.5 h-3 w-3 text-red-700" />
              <StarIcon className="-mt-0.5 h-3 w-3 text-red-700" />
              <StarIcon className="-mt-0.5 h-3 w-3 text-red-700" />
              <StarIcon className="-mt-0.5 h-3 w-3 text-red-700" />
            </Typography>
          </div>
          <Typography
            variant="h6"
            color="overflow-hidden lg:font-sans lg:text-base lg:leading-relaxed mb-8  lg:text-blue-gray-700 lg:text-base"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="d-none d-md-block flex justify-around pt-0">
          {/* <Link to="/contact">
            <Button size="sm" color="red" className=" w-32" fullWidth={false}>
              Join Team
            </Button>
          </Link>
          <Link to="/sponsor">
            <Button size="sm" color="red" className=" w-32" fullWidth={false}>
              Donate
            </Button>
          </Link> */}
        </CardFooter>
      </div>
    </Card>
  );
};

MaterialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

MaterialCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default MaterialCard;