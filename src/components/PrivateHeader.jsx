import { useSelector } from "react-redux";

export default function PrivateHeader() {
  const { userAction } = useSelector((state) => state.user);

  return (
    <header className="p-4 md:p-6 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>

        <div className="flex items-center gap-5">
          <div className="">
            <i className="bi bi-person-circle text-gray-500 text-4xl"></i>
          </div>
          <span className="text-gray-700 text-[20px]  mt-1">
            {userAction.firstname} {userAction.lastname}
          </span>
        </div>
      </div>
    </header>
  );
}
