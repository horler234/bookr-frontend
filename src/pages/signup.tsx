import { useState } from "react";
import styled from "styled-components";

export const TodosContainer = styled.main`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 40px;

  h1 {
    font-family: NexaBlack, sans-serif;
    font-size: 64px;
    line-height: 120.1%;
    letter-spacing: 0.04em;
    text-align: center;
    margin-bottom: 30px;
  }
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

const Signin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <TodosContainer>
      <h1>TODOS</h1>
    </TodosContainer>
  );
};

export default Signin;
