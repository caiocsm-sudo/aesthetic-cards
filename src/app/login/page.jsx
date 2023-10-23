"use client";

import styled from "styled-components";

const LoginForm = styled.div`
  width: 20vw;
  margin: 50px auto;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #2f2f2f;
  border-radius: 10px;
`;

const TextInput = styled.input`
  border: 1px solid #272727b5;
  margin: 0.3rem 0;
  outline: none;
  border-radius: 5px;
  padding: 7px;
  width: 100%;
`;

const Button = styled.button`
  padding: 7px;
  border-radius: 10px;
  background-color: rgb(12, 12, 12);
  font-weight: 500;
  color: #f2f2f2;
  width: 100%;
  margin: 0.6rem 0;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    background-color: #232323;
  }
`;

export default function Login() {
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section>
      <LoginForm>
        <form onSubmit={handleSubmit}>
          <h2 style={{ margin: '10px 0' }} >Log In</h2>
          <TextInput type="email" placeholder="Email"></TextInput>
          <TextInput type="password" placeholder="Password"></TextInput>
          <Button>LOG IN</Button>
        </form>
      </LoginForm>
    </section>
  );
}
