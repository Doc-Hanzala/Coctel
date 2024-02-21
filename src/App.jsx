import About from "./Pages/About/About";
import Newsletter from "./Pages/Newsletter/Newsletter";
import Cocktail from "./Pages/Cocktail/Cocktail";
import Error from "./Pages/Error/Error";
import Landing from "./Pages/Landing/Landing";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import SinglepageError from "./Pages/SinglePageError/SinglepageError";
import { loader as landingLoader } from "./Pages/Landing/Landing";
import { loader as cocktailLoader } from "./Pages/Cocktail/Cocktail";
import { action as newsletterAction } from "./Pages/Newsletter/Newsletter";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        action: newsletterAction,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglepageError />,
        loader: cocktailLoader(queryClient),
      },
      {
        index: true,
        errorElement: <SinglepageError />,
        loader: landingLoader(queryClient),
        element: <Landing />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
