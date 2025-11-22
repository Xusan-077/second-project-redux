import { useSelector } from "react-redux";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { useState } from "react";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);

  const { userAction } = useSelector((state) => state.user);

  console.log(userAction);

  return (
    <section className="">
      {showModal && <ChangePasswordModal onClose={() => setShowModal(false)} />}

      <div className="">
        <div className="shadow-lg p-[25px] rounded-lg">
          <h2 className="text-[26px] font-semibold mb-[30px]">
            Shaxsiy malumotlar
          </h2>

          <div className="grid grid-cols-3">
            <div className="ml-[120px]">
              <i className="text-[120px] text-gray-500 bi bi-person-circle"></i>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px]">Ism</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.firstname}
                </h3>
              </div>
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px]">Yoshi</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.age}
                </h3>
              </div>
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px]">Jinsi</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.gender}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px]">Familyasi</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.lastname}
                </h3>
              </div>
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px]">Jinsi</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.email}
                </h3>
              </div>
              <div className="">
                <h6 className="text-[14px] text-[#333] mb-[5px] ">Id</h6>
                <h3 className="text-[20px] text-[#333] mb-[6.3px] font-semibold">
                  {userAction.id}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] items-center mt-[30px]">
          <div className="p-[30px_30px_50px_30px] flex flex-col justify-between h-[150px] shadow-lg rounded-lg w-[450px]">
            <h3 className="text-[18px] font-semibold mb-[30px]">Kirish</h3>

            <div className="text-[20px] font-bold">{userAction.id}</div>
          </div>
          <div className="relative p-[30px_30px_50px_30px] flex flex-col justify-between h-[150px] shadow-lg rounded-lg w-[450px]">
            <div className="">
              <h3 className="text-[18px] font-semibold mb-[30px]">Parol</h3>
              <button
                className="absolute top-[30px] right-[30px]"
                onClick={() => setShowModal(true)}
              >
                <i className="text-[22px] text-gray-600 cursor-pointer bi bi-pencil"></i>
              </button>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map(
                (el, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-[50%] bg-black"
                  ></div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
