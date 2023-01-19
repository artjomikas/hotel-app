import { AdultsDropdown, KidsDropdown, CheckIn, CheckOut } from "../index";

const BookForm = () => {
  return (
    <form className="h-[300px] bg-white w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full px-4 lg:flex-row">
        <div className="flex-1 border-r ">
          <CheckIn />
        </div>

        <div className="flex-1 border-r ">
          <CheckOut />
        </div>

        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>

        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
