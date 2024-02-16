import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import CocktailList from "../../Components/CocktailList";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${searchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <Wrapper>
      <CocktailList drinks={drinks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 6rem auto;
  padding: 1rem 2rem;
`;

export default Landing;
