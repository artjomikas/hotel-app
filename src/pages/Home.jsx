import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container relative mx-auto">
        <div className="p-4 mt-4 bg-accent/20 lg:shadow-xl lg:absolute lg:-top-12 lg:left-0 lg:right-0 lg:z-30 lg:p-0">
          <BookForm />
        </div>
      </div>

      <Rooms />
    </>
  );
};

export default Home;
