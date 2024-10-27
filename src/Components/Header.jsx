import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div color="" className="bg-blue-700 px-7 py-7  ">

        <div className="flex flex-wrap items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="ml-2 cursor-pointer py-1.5"
          >
            Material Tailwind
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="ml-2 cursor-pointer py-1.5"
          > <ul className="flex flex-row gap-5">
              <li><NavLink to='/recepie' >Recepie</NavLink></li>

              <li><NavLink to='/home'>Home</NavLink></li>
            </ul>
          </Typography>

          <div className="ml-auto flex gap-1 md:mr-4">


            <IconButton variant="text" color="white">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="text" color="white">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div>
          {/* <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div> */}
        </div>
      </div>
    </>

  );
}
