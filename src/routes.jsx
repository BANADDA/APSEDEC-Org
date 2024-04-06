import { Home } from "@/pages";
import { UsersIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightOnRectangleIcon,
  HomeIcon
} from "@heroicons/react/24/solid";
import About from "./pages/about";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UsersIcon,
    name: "About Us",
    path: "/about-us",
    element: <About />,
  },
  // {
  //   icon: UserGroupIcon,
  //   name: "Our Team",
  //   path: "/teamPage",
  //   element: <Home/>,
  // },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Programs",
    path: "/programs",
    element: <Home/>,
  },
  // {
  //   icon: PhoneIcon,
  //   name: "Contact Us",
  //   path: "/contact",
  //   element: <Home />,
  // },
];


export default routes;