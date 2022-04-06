import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { SignWithGoogleButton } from "../components/GoogleButton";
import { CloseIcon } from "../components/icons/CloseIcon";
import { Input } from "../components/Input";
import { Modal } from "../components/Modal";
import { TodoCard } from "../components/TodoCard";
import { v4 } from "uuid";

export const TodosContainer = styled.main`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  h1 {
    font-family: NexaBlack, sans-serif;
    font-size: 64px;
    line-height: 120.1%;
    letter-spacing: 0.04em;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    text-align: center;
    margin-top: 20px;
  }
`;

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

const Todos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [todos, setTodos] = useState<
    { title: string; desc: string; id: string }[]
  >([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodo = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    /* const todo = JSON.parse(localStorage.getItem("todos") ?? ""); */

    if (title.length && desc.length) {
      setTodos((todo) => [...todo, { title, desc, id: v4() }]);
      setTitle("");
      setDesc("");
      setIsModalOpen(false);
    }
  };

  const deleteTodo = (id: string) => {
    setTodos((todo) => todo.filter((item) => item.id !== id));
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      const id = searchParams.get("user");
      if (id) {
        try {
          // setIsLoading(true);
          const body = {
            id,
          };
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const { data } = await axios.post(
            `http://localhost:8080/login`,
            body,
            config
          );

          console.log(data);
          if (data._doc) {
            localStorage.setItem("token", data.token);
            setTodos(data._doc.todos);
          }
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);
  return (
    <TodosContainer>
      <h1>BOOKR TODOS</h1>
      {todos.length ? (
        todos.map(({ title, desc, id }) => (
          <TodoCard onDelete={deleteTodo} title={title} desc={desc} id={id} />
        ))
      ) : (
        <p>You have no available task</p>
      )}

      <AddNewTodoButton onClick={() => setIsModalOpen(true)}>
        ADD NEW TODO
      </AddNewTodoButton>

      {!token && (
        <>
          <SignWithGoogleButton />
          <p>To save your todo to the database</p>
        </>
      )}
      {isModalOpen && (
        <AddTodoModalContainer>
          <AddTodoCard>
            <form onSubmit={addTodo}>
              <h2>ADD NEW TODO</h2>

              <Input
                placeholder="Enter todo title"
                label="Todo title"
                id="todo_title"
                value={title}
                maxLength={20}
                onChange={(evt) => setTitle(evt.target.value)}
              />
              <Input
                placeholder="Enter todo description"
                label="Todo description"
                id="todo_description"
                value={desc}
                onChange={(evt) => setDesc(evt.target.value)}
                maxLength={30}
              />

              <AddNewTodoButton mt={50}>ADD TODO</AddNewTodoButton>
            </form>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </AddTodoCard>
        </AddTodoModalContainer>
      )}
    </TodosContainer>
  );
};

export default Todos;
