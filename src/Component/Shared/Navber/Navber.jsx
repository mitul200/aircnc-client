import Container from "../Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";

const Navber = () => {
  return (
    <div className="fixed z-10 shadow-sm bg-white w-full">
      <div className="py-4 broder-b-[1px]">
        <Container>
          <div className="flex justify-between flex-row items-center gap-3 ">
            <div>
              <Logo />
            </div>
            <div>
              <Search />
            </div>
            <div>
              <MenuDropDown />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navber;
