import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/todoListSlice";

export default function ToDoItem({ todo, title, checked }) {
  const dispatch = useDispatch();

  return (
    <li className="grid gap-5 items-center grid-cols-[50px_1fr_100px] mb-2.5 border-b pb-2.5 border-b-[#ccc]">
      <input
        checked={checked ? checked : ""}
        type="checkbox"
        onChange={() => dispatch(toggleTodo(todo))}
      />

      <h2
        className={`${checked ? "line-through" : ""} text-gray-500 text-center`}
      >
        {title}
      </h2>
    </li>
  );
}
