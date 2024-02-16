import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const singleCocktail =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const id = params.id;

  const { data } = await axios.get(`${singleCocktail}${id}`);

  return { id, drink: data.drinks[0] };
};

const Cocktail = () => {
  const { id, drink } = useLoaderData();

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strDrinkThumb: img,
    strInstructionsIT: instructions,
  } = drink;

  const validIng = Object.keys(drink)
    .filter((item) => {
      return item.startsWith("strIngredient") && drink[item] !== null;
    })
    .map((key) => drink[key])
    .join(",");
  console.log(validIng);

  return (
    <Wrapper>
      <div className="header">
        <Link className="btn" to="/">
          back home
        </Link>
        <h3>{name}</h3>
      </div>
      <div className="cocktail-info">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <p>
            <span className="ctg">name : </span> {name}
          </p>
          <p>
            <span className="ctg">category : </span> {category}
          </p>
          <p>
            <span className="ctg">info : </span> {alcoholic}
          </p>
          <p>
            <span className="ctg">glass : </span> {glass}
          </p>
          <p>
            <span className="ctg">Ingredients : </span> {validIng}
          </p>
          <p>
            <span className="ctg">instructions : </span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 6rem auto;
  padding: 1rem 2rem;

  .header {
    text-align: center;
    h3 {
      margin: 1.4rem 0;
      letter-spacing: 1px;
      color: #5a5a5a;
    }
  }

  .cocktail-info {
    margin-top: 3rem;
  }

  img {
    height: 25rem;
    width: 100%;
    object-fit: cover;
  }

  .info {
    margin-top: 2rem;

    p {
      margin: 1.5rem 0;
    }
  }

  @media (min-width: 768px) {
    .cocktail-info {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .img-container,
    .info {
      flex: 0 0 calc(50% - 2rem);
    }

    .info {
      align-self: center;
    }
  }
`;

export default Cocktail;
