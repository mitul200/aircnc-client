import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

// eslint-disable-next-line react/prop-types
const CategoryBox = ({ label, icon: Icon }) => {
  const [params, useParams] = useSearchParams();
  const navigate = useNavigate();
  // const value = params.get("category");
  // console.log(value);

  const handelClick = () => {
    // console.log(object);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: label,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };
  return (
    <div
      onClick={handelClick}
      className=" flex flex-col items-center justify-center border-b-2 hover:text-neutral-500 border-transparent "
    >
      <Icon size={26} />
      <div>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </div>
  );
};

export default CategoryBox;
