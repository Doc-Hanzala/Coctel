import Loader from "../../Components/Loader";

import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomeLayout = () => {
  const { state } = useNavigation();
  const isPageLoading = state === "loading";
  return (
    <div>
      <Wrapper>
        <nav>
          <div className="navbar">
            <h1 className="logo">coctel</h1>
            <div className="nav-links">
              <NavLink className="nav-link" to="/">
                home
              </NavLink>

              <NavLink className="nav-link" to="/about">
                about
              </NavLink>

              <NavLink className="nav-link" to="/newsletter">
                newsletter
              </NavLink>
            </div>
          </div>
        </nav>
      </Wrapper>
      {isPageLoading ? <Loader /> : <Outlet />}
    </div>
  );
};

const Wrapper = styled.nav`
  background: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  .navbar {
    width: 90vw;
    max-width: 1050px;
    margin: 0rem auto;
    padding: 0.5rem 2rem;
  }

  .logo {
    font-size: 2.3rem;
    letter-spacing: 2px;
    color: orangered;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .nav-link {
    text-decoration: none;
    margin: 0.8rem 0;
    color: #5a5a5a;
    font-size: 1.2rem;
    letter-spacing: 2px;
    transition: all 0.2s;
  }

  .nav-link:hover {
    color: orangered;
  }
  .active {
    color: orangered;
  }

  @media (min-width: 780px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: c;
    }
    .nav-links {
      flex-direction: row;
      align-items: center;
      margin-top: 0;
    }

    .nav-link {
      margin-left: 1.5rem;
    }
  }
`;
export default HomeLayout;
