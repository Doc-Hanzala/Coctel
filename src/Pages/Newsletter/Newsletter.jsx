import { useState } from "react";

import styled from "styled-components";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://jsonplaceholder.typicode.com/posts";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  toast.success("Subscribed");

  return redirect("/");
};

const Newsletter = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("test@test.com");

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="POST">
        <p>our newsletter</p>
        <div className="form-control">
          <label>name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label>last name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            required
          />
        </div>

        <div className="form-control">
          <label>email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn submit-btn"
        >
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1050px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  text-align: center;
  color: #5a5a5a;

  p {
    letter-spacing: 2px;
    margin: 1rem 0;
  }
  .form {
    background: white;
    padding: 1rem 1.5rem;
    width: 80vw;
    max-width: 600px;
    margin: 2rem auto;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 1rem 0rem;
  }

  .form-control label {
    width: 90%;
    margin: 0.5rem auto;
  }

  .form-control input {
    width: 90%;
    margin: 0 auto;
    outline: none;
    padding: 0.4rem;
    background: #e4e4e4;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
  }

  .submit-btn {
    text-transform: capitalize;
    border: 1px solid orangered;
    letter-spacing: 1px;
    margin-top: 0.5rem;
  }
`;

export default Newsletter;
