export default function PrivateProductItem({
  product,
  img,
  price,
  name,
  count,
}) {
  console.log(product);

  return (
    <li className="bg-white rounded-lg p-4 w-full">
      <div className="bg-gray-200 w-full h-[200px] rounded-lg mb-[22px] flex items-center justify-center">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
      </div>

      <div className="p-1.5">
        <h2 className="text-lg text-[18x] font-semibold line-clamp-1">
          {name}
        </h2>

        <p className="text-gray-500 text-[14px] mb-[25px] line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          unde debitis laboriosam perferendis ab provident facere inventore
          labore, dolorem eligendi?
        </p>

        <div className="flex justify-between w-full text-gray-700 font-medium">
          <span>Price: ${price}</span>
          <span>Count: {count}</span>
        </div>
      </div>
    </li>
  );
}
