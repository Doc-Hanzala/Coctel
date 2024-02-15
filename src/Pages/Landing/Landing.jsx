import axios from "axios";
import { useLoaderData } from "react-router-dom";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${searchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const data = useLoaderData();

  return <div>Landing</div>;
};

export default Landing;
