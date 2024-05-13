import { useContext, useEffect, useState } from "react";
import Container from "../Shared/Container";
import Card from "./Card";
import { AuthContext } from "../../providers/AuthProvider";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const { loading } = useContext(AuthContext);

  const [rooms, setRooms] = useState([]);
  const [params, useParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
      });
  }, [category]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {rooms.map((room, i) => (
            <Card key={i + 1} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-10">
          <Heading
            title={"No room avable in this category"}
            subtitle={"please selects other category"}
            center={true}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
