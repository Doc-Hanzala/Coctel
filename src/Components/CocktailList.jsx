import styled from "styled-components";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  const formattedDrinks = drinks.map((item) => {
    const {
      idDrink: id,
      strAlcoholic: alcoholic,
      strDrink: drink,
      strGlass: glass,
      strDrinkThumb: img,
    } = item;

    return { id, alcoholic, drink, glass, img };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((singleDrink) => {
        return (
          <div key={singleDrink.id} className="cocktail">
            <CocktailCard {...singleDrink} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cocktail {
      flex: 0 0 calc(50% - 2rem);
    }
  }

  @media (min-width: 1050px) {
    .cocktail {
      flex: 0 0 calc(33% - 2rem);
    }
  }
`;

export default CocktailList;
