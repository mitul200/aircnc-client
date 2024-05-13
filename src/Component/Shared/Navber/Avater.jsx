import { useContext } from "react";
import img from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avater = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  return (
    <div>
      <img
        className=" rounded-full w-[30px] h-[30px]"
        src={user && user.displayName ? user.displayName : img}
        alt=""
      />
    </div>
  );
};

export default Avater;
