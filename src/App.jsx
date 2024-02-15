import About from "./Pages/About/About";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Cocktail from "./Pages/Cocktail/Cocktail";
import Error from "./Pages/Error/Error";
import Landing from "./Pages/Landing/Landing";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import { loader as landingLoader } from "./Pages/Landing/Landing";
import SinglepageError from "./Pages/SinglePageError/SinglepageError";

import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
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
        errorElement:<SinglepageError/>,
        loader:landingLoader,
        element: <Landing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
