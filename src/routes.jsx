import { Home } from "@/pages";
import { UsersIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  PhoneIcon,
  PhotoIcon
} from "@heroicons/react/24/solid";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/Gallery";
import Programs from "./pages/programs";


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
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Projects",
    path: "/programs",
    element: <Programs/>,
  },
  {
    icon: PhotoIcon,
    name: "Gallery",
    path: "/gallery",
    element: <Gallery/>,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];


export default routes;