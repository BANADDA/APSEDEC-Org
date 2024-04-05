import { Avatar, Card, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function TeamCard({ img, name, position, contact }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="md"
        variant="rounded"
        className="h-60 w-60 shadow-lg shadow-gray-500/25 mx-auto"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
      {contact && (
        <div className="mx-auto mt-1">
          <div className="mb-2 font-bold">
            <Typography className="font-bold">Email: <span className="text-blue-600 font-semibold">{contact.email}</span> </Typography>
          </div>
          <div className="font-bold">
            <Typography className="font-bold">Phone: <span className="text-green-600 font-semibold">{contact.phone}</span></Typography>
          </div>
        </div>
      )}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  contact: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  contact: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
