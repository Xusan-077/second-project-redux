import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../store/todoListSlice";
import { useState } from "react";

export default function PrivateToDoItem({ todo, title, checked }) {
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState(null);

  return (
    <li className="grid gap-5 items-center grid-cols-[50px_1fr_100px] mb-2.5 border-b pb-2.5 border-b-[#ccc]">
      <input
        checked={checked ? checked : ""}
        type="checkbox"
        onChange={() => dispatch(toggleTodo(todo))}
      />

      {editId ? (
        <input
          type="text"
          onChange={(evt) => setEditValue(evt.target.value)}
          className="border border-gray-500 rounded-lg p-[5px_0_5px_15px]"
          defaultValue={todo.title}
        />
      ) : (
        <h2
          className={`${
            checked ? "line-through" : ""
          } text-gray-500 text-center`}
        >
          {title}
        </h2>
      )}

      <div className="flex gap-2.5">
        {editId ? (
          <button
            onClick={() => {
              dispatch(editTodo({ id: editId, title: editValue }));
              setEditId(null);
            }}
            className="w-full bg-yellow-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
          >
            <i className="bi bi-bookmark"></i>
          </button>
        ) : (
          <button
            onClick={() => setEditId(todo.id)}
            className="w-full bg-yellow-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
          >
            <i className="bi bi-pencil"></i>
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="w-full bg-red-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </li>
  );
}
