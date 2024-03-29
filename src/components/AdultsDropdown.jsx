import { useState, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import useOutsideClick from "../context/useOutsideClick";

const AdultsDropdown = ({ adults, setAdults }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <div onClick={() => setOpen((open) => !open)}>
      <Menu
        as="div"
        className="relative w-full h-full bg-white cursor-pointer "
      >
        <div className="flex text-accent items-center mt-1.5 px-4">
          <Menu.Button className="font-semibold uppercase text-accent text-md pr-1 select-none">
            adults
          </Menu.Button>
          <BsChevronDown size="14" />
        </div>

        <p className="text-gray-800 pl-4 text-md">{adults}</p>

        <Transition
          show={open}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Menu.Items
            ref={ref}
            as="ul"
            className="absolute z-40 flex flex-col w-full mt-4 bg-[#fdfdfd] shadow-xl  border-t-[1px] "
          >
            {[...Array(5).keys()].map((elem, index) => (
              <Menu.Item
                onClick={() => setAdults(elem + 1)}
                static
                key="index"
                as="li"
                className="flex items-center justify-center w-full h-10 border-b-1 cursor-pointer last-of-type:border-b-0 hover:bg-accent hover:text-white"
              >
                {elem + 1} adults
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AdultsDropdown;
