import About from "./Pages/About/About";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Cocktail from "./Pages/Cocktail/Cocktail";
import Error from "./Pages/Error/Error";
import Landing from "./Pages/Landing/Landing";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        index: true,
        element: <Landing />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
