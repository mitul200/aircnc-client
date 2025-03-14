import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categorisData";

const Categoris = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categoris;
