import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../store/todoListSlice";
import PrivateToDoItem from "./PrivateTodoItem";

export default function PrivateToDo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const { isAuth } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);

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
    setModal(false);
  }

  return (
    <section>
      <div className="container">
        <div className="">
          {modal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg">
                {/* Close button */}
                <button
                  onClick={() => setModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
                >
                  &times;
                </button>

                {/* Modal title */}
                <h2 className="text-2xl md:text-3xl text-gray-700 text-center mb-5 font-semibold">
                  Add ToDo
                </h2>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full gap-4"
                >
                  <input
                    onChange={(evt) => setTitle(evt.target.value)}
                    className="border-b border-gray-300 p-2 outline-none focus:border-blue-400 transition"
                    type="text"
                    placeholder="Enter ToDo"
                  />

                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mb-[15px]">
            <h3 className="text-[26px] font-semibold">ToDos</h3>

            <button
              onClick={() => setModal(true)}
              className="p-[10px_20px] bg-green-500 cursor-pointer text-white rounded-lg"
            >
              + Add ToDo
            </button>
          </div>

          <ul className="border border-gray-500 p-[30px_20px_10px_30px] rounded-lg">
            {todos.length ? (
              todos.map((todo) => (
                <PrivateToDoItem todo={todo} key={todo.id} {...todo} />
              ))
            ) : (
              <p className="text-red-500 text-center text-2xl font-semibold mb-[20px]">
                ToDo List bo'sh
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
