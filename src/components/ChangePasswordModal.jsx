import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../store/userSlice";
import { toast } from "react-toastify";

export default function ChangePasswordModal({ onClose }) {
  const dispatch = useDispatch();
  const { userAction } = useSelector((state) => state.user);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      currentPassword == userAction.password &&
      newPassword == confirmPassword
    ) {
      dispatch(changePassword(newPassword));

      onClose(false);

      toast.success("password changed success");
    } else {
      toast.error("password o`zgartirishda xatolik");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[400px] rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
        >
          &times;
        </button>

        <h2 className="text-[20px] text-gray-800 font-semibold mb-4">
          Parolni o'zgartirish
        </h2>
        <p className="text-gray-500 mb-5">Quyidagi ma’lumotlarni to‘ldiring</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Current Password */}
          <div className="relative">
            <label className="block text-gray-500 mb-1">Amaldagi parol</label>
            <input
              type={showCurrent ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Parolingizni kiriting"
              className="border w-full rounded-lg p-3 pr-10 border-gray-300"
            />
            <span
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute top-[52px] text-[24px] right-3 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showCurrent ? <BiShow /> : <BiHide />}
            </span>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-gray-500 mb-1">Yangi parol</label>
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Parolingizni kiriting"
              className="border w-full rounded-lg p-3 pr-10 border-gray-300"
            />
            <span
              onClick={() => setShowNew(!showNew)}
              className="absolute top-[52px] text-[24px] right-3 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showNew ? <BiShow /> : <BiHide />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-500 mb-1">
              Parolni tasdiqlash
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Parolingizni kiriting"
              className="border w-full rounded-lg p-3 pr-10 border-gray-300"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-[52px] text-[24px] right-3 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showConfirm ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-blue-400 text-white py-3 rounded-lg mt-2 hover:opacity-80 transition">
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
}
