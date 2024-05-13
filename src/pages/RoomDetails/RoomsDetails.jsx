import Headers from "../../Component/Rooms/Headers";
import RoomReservation from "../../Component/Rooms/RoomReservation";
import RoomsInfo from "../../Component/Rooms/RoomsInfo";
import Container from "../../Component/Shared/Container";

const RoomsDetails = () => {
  return (
    <>
      <Container>
        <div className="max-w-screen-lg m-auto">
          <div className="flex flex-col gap-6">
            <Headers />
            <div className=" grid grid-cols-1 md:grid-cols-7 md:gap-5 mt-6">
              <RoomsInfo />
              <div className="md:col-span-3">
                <RoomReservation />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RoomsDetails;
