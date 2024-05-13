import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ room }) => {
  // console.log(room);
  // eslint-disable-next-line react/prop-types
  const { image, location, dateRange, price, category } = room;

  return (
    <Link to={`/room/${1}`}>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="
          aspect-square 
          w-full 
          relative 
          overflow-hidden 
          rounded-xl
        "
          >
            <img
              className="
            object-cover 
            h-full 
            w-full 
            group-hover:scale-110 
            transition
          "
              // eslint-disable-next-line react/prop-types
              src={image}
              alt="Room"
            />
            <div
              className="
          absolute
          top-3
          right-3
        "
            >
              {/* <HeartButton /> */}
            </div>
          </div>
          {/* // eslint-disable-next-line react/prop-types */}
          <div className="font-semibold text-lg">{location}</div>
          <div className="font-light text-neutral-500">{dateRange}</div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {price}</div>
            <div className="font-light">{category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
