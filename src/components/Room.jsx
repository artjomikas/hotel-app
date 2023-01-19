import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Hotel Image"
          className="w-full transition-all duration-300 rounded-sm group-hover:scale-110"
        />
      </div>

      <div className="shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold bg-white rounded-sm">
        <div className="flex justify-between w-[80%] ">
          <div className="flex items-center gap-1">
            <BsArrowsFullscreen className="text-accent" />
            <p>Size {size}m2</p>
          </div>

          <div className="flex items-center gap-1">
            <BsPeople className="text-accent" />
            <p>Max People {maxPerson}</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>

      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
      >
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
