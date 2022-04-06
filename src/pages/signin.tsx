import { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/Input";

export const TodosContainer = styled.main`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const AddNewTodoButton = styled.button<{ mt?: number }>`
  width: 100%;
  height: 74px;
  background: #1a1a1a;
  border-radius: 8px;
  border: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 16px;
  font-family: NexaBold, sans-serif;
  color: #fff;
  margin-top: ${(props) => props.mt ?? 20}px;
`;

export const AuthHeader = styled.h1`
  font-size: 24px;
  font-family: NexaBold, sans-serif;
`;

const Signin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <TodosContainer>
      <AuthHeader>SIGN IN</AuthHeader>
      <p>Welcome back to Bookr Todo</p>

      <Input placeholder="Enter email" label="Email" id="signin_email" />
    </TodosContainer>
  );
};

export default Signin;
