import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <div>
        <h2>about us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          esse ducimus voluptatem, iusto aspernatur sint labore libero fuga
          impedit ea doloribus delectus quidem fugiat, odit natus harum
          exercitationem beatae illo. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Maiores, consectetur!
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 6rem auto;
  padding: 1rem 2rem;
  h2 {
    letter-spacing: 3px;
    margin-bottom: 2rem;
    color: #5a5a5a;
  }

  p {
    line-height: 1.5;
    color: #747474;
    letter-spacing: 2px;
  }
`;

export default About;
