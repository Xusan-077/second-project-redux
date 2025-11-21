export default function PrivateProductItem({ productId, name, checked }) {
  return (
    <li className="grid gap-5 items-center grid-cols-[50px_1fr_100px] mb-2.5 border-b pb-2.5 border-b-[#ccc]">
      <span className="">{productId}</span>

      <h2
        className={`${checked ? "line-through" : ""} text-gray-500 text-center`}
      >
        {name}
      </h2>
    </li>
  );
}
