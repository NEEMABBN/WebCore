import Blogs from "./Pages/Blogs/Blogs";
import OurColleagues from "./Pages/Colleagues/OurColleagues";
import ContactUs from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/Home/HomePage";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import TrainingCourse from "./Pages/TrainingCourse/TrainingCourse";

const router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/TrainingCourse",
    element: <TrainingCourse />,
  },
  {
    path: "/OurColleagues",
    element: <OurColleagues />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },
];

export default router;
