import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navber/Navber";
// import Rooms from "../Component/Rooms/Rooms";
import Footer from "../Component/Shared/Footer/Footer";
// import Container from "../Component/Shared/Container";

const Main = () => {
  return (
    <div>
      <Navber />
      <div className="pt-28 pb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
