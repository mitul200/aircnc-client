import Calender from "./Calender";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "../Button/Button";
const RoomReservation = () => {
  return (
    <div className=" bg-white overflow-hidden border-neutral-200 border-[1px] rounded-xl">
      <div className="flex flex-row items-center gap-1 p-4"></div>
      <div className="text-2xl font-semibold">$ 200</div>
      <div className="font-light text-neutral-500">night</div>
      <hr />
      <Calender />
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <div className=" flex flex-row justify-between items-center p-4 font-semibold text-lg">
        <p>Total</p>
        <p>$ 300</p>
      </div>
    </div>
  );
};

export default RoomReservation;
