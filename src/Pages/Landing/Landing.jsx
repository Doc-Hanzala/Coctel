import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import CocktailList from "../../Components/CocktailList";
import Search from "../../Components/Search";

import { useQuery } from "@tanstack/react-query";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function cocktailsQuery(searchValue) {
  return {
    queryKey: ["search", searchValue || "all"],
    queryFn: async () => {
      const response = await axios(`${searchUrl}${searchValue}`);
      return response.data.drinks;
    },
  };
} 

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";

    await queryClient.ensureQueryData(cocktailsQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();

  const {
    data: drinks,
    error,
    isLoading,
  } = useQuery(cocktailsQuery(searchTerm));

  if (!drinks) {
    return (
      <Wrapper>
        <h2>there is some type error. Please try again</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Search searchTerm={searchTerm} />
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
