import { Home } from "@/pages";
import { UsersIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

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
    element: <Home />,
  },
  {
    icon: UserGroupIcon,
    name: "Our Team",
    path: "/teamPage",
    element: <Home/>,
  },
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