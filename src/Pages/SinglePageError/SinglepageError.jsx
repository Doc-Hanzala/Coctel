import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const SinglepageError = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div>
        <p>{error.message}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 4rem auto;
  padding: 0.5rem 2rem;
`;
export default SinglepageError;
