import ErrorImg from "../../Images/error.svg";

import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="img-container">
          <img src={ErrorImg} alt="" />
          <p>we can not seem to find the page you are looking for</p>
          <Link className="link" to="/">
            back home
          </Link>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 0rem auto;
  padding: 0.5rem 2rem;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
  }

  img {
    width: 600px;
  }

  .link {
    text-decoration: none;
    font-size: 2rem;
    font-weight: lighter;
    color: orangered;
  }
  p {
    margin: 2rem 0;
    color: #5a5a5a;
  }
`;

export default Error;
