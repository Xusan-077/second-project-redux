import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../store/todoListSlice";
import ToDoItem from "../components/ToDoItem";

export default function ToDo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { isAuth } = useSelector((state) => state.user);

  console.log("todos", todos);

  const [title, setTitle] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (title !== "") {
      const newToDo = {
        id: Date.now(),
        title: title,
        checked: false,
      };

      dispatch(addTodo(newToDo));
    }

    evt.target.reset();
    setTitle("");
  }

  console.log(isAuth);

  return (
    <section>
      <div className="container">
        <div className="">
          <ul className="border border-gray-500 p-5 rounded-lg">
            {todos.length ? (
              todos.map((todo) => (
                <ToDoItem todo={todo} key={todo.id} {...todo} />
              ))
            ) : (
              <p className="rounded-lg text-red-500 text-center text-2xl font-semibold ">
                ToDo List bo`sh
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
