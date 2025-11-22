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
        <div
          className={`${!isAuth ? "" : "grid-cols-[3fr_5fr] gap-[30px] grid"}`}
        >
          {isAuth ? (
            <div className="">
              <h2 className="text-[30px] text-gray-600 text-center mb-5 font-semibold">
                ToDo List
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full border-gray-500 border p-[25px_20px] rounded-lg"
              >
                <input
                  onChange={(evt) => setTitle(evt.target.value)}
                  className="border-b p-[0_0_0_10px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                  type="text"
                  placeholder="Enter ToDo"
                />
                <button className="bg-blue-400 p-[5px_0] text-[14px] w-full text-white rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}

          <ul className="border border-gray-500 p-[20px] rounded-lg">
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
