import { useState } from "react";
import styled from "styled-components";
import { EditIcon } from "./icons/EditIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

export const TodoCardContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 4px 54px -2px rgba(0, 0, 0, 0.04);
  padding: 20px;
  transition: all 0.6s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h4 {
    font-family: NexaBold, sans-serif;
    transition: all 0.6s ease;
  }

  p {
    font-size: 14px;
    margin-top: 8px;
    transition: all 0.6s ease;
  }

  svg {
    fill: #1a1a1a;
    transition: all 0.6s ease;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;

    &:last-child {
      margin-left: 20px;

      &:hover svg {
        fill: red;
      }
    }

    &:first-child:hover svg {
      fill: green;
    }
  }

  /* &:hover {
  background: #1a1a1a;
  svg {
    fill: #fff;
  }
  h4,
  p {
    color: #fff;
  }
} */
`;

interface ITodo {
  title?: string;
  desc?: string;
  id?: string;
}

export const TodoCard = ({ title, desc, id }: ITodo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <TodoCardContainer>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
          <span>{id}</span>
        </div>

        <div>
          <button onClick={() => setIsModalOpen(true)}>
            <EditIcon />
          </button>

          <button>
            <TrashIcon />
          </button>
        </div>
      </TodoCardContainer>
      {isModalOpen && <Modal isEdit onClose={() => setIsModalOpen(false)} />}
    </>
  );
};
