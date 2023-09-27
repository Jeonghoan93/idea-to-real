import Container from "src/components/Container";
import LeftSide from "src/pages/Home/Sections/LeftSide";
import RightSide from "src/pages/Home/Sections/RightSide";

const Home: React.FC = () => {
  return (
    <Container>
      <div
        className="
          mt-[-22pt]
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
