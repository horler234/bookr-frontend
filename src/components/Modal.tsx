import styled from "styled-components";
import { AddNewTodoButton } from "../pages";
import { CloseIcon } from "./icons/CloseIcon";
import { Input } from "./Input";

export const AddTodoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddTodoCard = styled.div`
  width: 90%;
  max-width: 600px;
  height: 500px;
  background: #fff;
  padding: 50px 0;
  text-align: center;
  position: relative;

  form {
    width: 90%;
    margin: 0 auto;

    h2 {
      font-family: NexaBold, sans-serif;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;
  top: 50px;
  right: 50px;
`;

interface IModal {
  onClose: () => void;
  isEdit?: boolean;
}

export const Modal = ({ onClose, isEdit }: IModal) => {
  return (
    <AddTodoModalContainer>
      <AddTodoCard>
        <form>
          <h2>{isEdit ? "EDIT TODO" : "ADD NEW TODO"}</h2>

          <Input
            placeholder="Enter todo title"
            label="Todo title"
            id="todo_title"
          />
          <Input
            placeholder="Enter todo description"
            label="Todo description"
            id="todo_description"
          />

          <AddNewTodoButton mt={50}>
            {isEdit ? "EDIT" : "ADD TODO"}
          </AddNewTodoButton>
        </form>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </AddTodoCard>
    </AddTodoModalContainer>
  );
};
