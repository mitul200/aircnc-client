import Heading from "../Heading/Heading";

const Headers = () => {
  return (
    <>
      <Heading
        title="valunama owl -Bambo house"
        subtitle="indonetiya ,sydeman"
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-820954888871612167/original/f37e01a9-cb1a-446d-be7e-c1d62d1f1c23.jpeg"
          alt=""
        />
      </div>
    </>
  );
};

export default Headers;
