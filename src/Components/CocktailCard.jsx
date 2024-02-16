import { Link } from "react-router-dom";
import styled from "styled-components";

const CocktailCard = ({ id, drink, glass, img, alcoholic }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="img-container">
          <img className="img" src={img} alt="" />
        </div>
        <div className="footer">
          <h4>{drink}</h4>
          <h5>{glass}</h5>
          <p>{alcoholic}</p>
          <Link to={`/cocktail/${id}`} className="btn">
            details
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    background: white;
    margin-bottom: 1.8rem;
    height: 500px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    transition: all 0.3s;
  }

  .card:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  }
  img {
    height: 20rem;
    object-fit: cover;
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .footer {
    margin: 1rem 0rem 0rem 1rem;
    h4,
    h5,
    p {
      margin: 0.8rem 0rem;
      color: #5a5a5a;
    }

    h4 {
      color: orangered;
      text-transform: uppercase;
      font-weight: bold;
    }

    .btn {
      margin-top: 0.5rem;
      display: inline-block;
    }
  }
`;
export default CocktailCard;
