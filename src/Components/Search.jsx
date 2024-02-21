import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const Search = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSearching = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <div className="form-control">
          <input type="search" name="search" defaultValue={searchTerm} />
        </div>
        <button disabled={isSearching} className="btn search-btn">
          {isSearching ? "searching...." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  padding: 1.4rem;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  width: 80%;
  margin: 0rem auto;
  margin-bottom: 2rem;

  .form {
    display: grid;
    grid-template-columns: 3fr 1fr;

    input {
      border: 2px solid darkgray;
      width: 100%;
      padding: 0.7rem;
      outline: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .search-btn {
      border: 2px solid orangered;
    }
  }
`;

export default Search;
