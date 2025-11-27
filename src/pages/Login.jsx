import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [birthdate, setBirthdate] = useState(null);

  function handleLogin(e) {
    e.preventDefault();
    const newErrors = {};

    if (!form.firstname.trim()) newErrors.firstname = "Firstname required!";
    if (!form.lastname.trim()) newErrors.lastname = "Lastname required!";

    if (!form.age) newErrors.age = "Age is required!";
    else if (isNaN(form.age)) newErrors.age = "Age must be a number!";
    else if (form.age < 1) newErrors.age = "Age must be positive!";

    if (!form.email.trim()) newErrors.email = "Email required!";
    else if (!form.email.includes("@gmail.com"))
      newErrors.email = "Invalid email format!";

    if (!form.password.trim()) newErrors.password = "Password required!";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Tizimga login qilindi");
      setTimeout(() => {
        dispatch(
          login({
            isAuth: true,
            userAction: {
              id: Date.now(),
              ...form,
            },
          })
        );
      }, 1000);
    }
  }

  useEffect(() => {
    if (isAuth)
      navigate("/profile", {
        replace: true,
      });
  }, [isAuth, navigate]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  return (
    <section className="flex justify-between">
      <div className="bg-gradient-to-br from-[#0a0f2c] to-[#101c48] text-white/70 text-[30px] max-w-[500px] w-full h-screen flex flex-col justify-between p-[50px_0_70px_50px]">
        <div className="flex justify-between px-[50px] pl-[20px]">
          <a href="/" className="text-white">
            Logo
          </a>
          <Link to="/" className="text-white">
            ← back
          </Link>
        </div>

        <p className="text-white/70 text-[40px] leading-[1.4] max-w-[500px] p-5">
          Welcome. <br />
          start your calculation <br />
          now with our <br />
          management <br />
          system!
        </p>
      </div>

      <div className="w-[80%] flex flex-col justify-center items-center">
        <h3 className="text-[25px] mb-2.5 font-bold text-black">
          Create an account
        </h3>

        <form onSubmit={handleLogin} className="w-[500px] mb-[30px]">
          {/* Firstname */}
          <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
            firstname
          </label>
          <input
            name="firstname"
            type="text"
            placeholder="enter firstname"
            onChange={handleChange}
            className="border p-3 rounded-lg mb-3 w-full border-gray-300"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm ml-2">{errors.firstname}</p>
          )}

          {/* Lastname */}
          <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
            lastname
          </label>
          <input
            name="lastname"
            type="text"
            placeholder="enter lastname"
            onChange={handleChange}
            className="border p-3 rounded-lg mb-3 w-full border-gray-300"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm ml-2">{errors.lastname}</p>
          )}

          {/* Age */}
          <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
            age
          </label>
          <input
            name="age"
            type="number"
            placeholder="enter age"
            onChange={handleChange}
            className="border p-3 rounded-lg mb-3 w-full border-gray-300"
          />
          {errors.age && (
            <p className="text-red-500 text-sm ml-2">{errors.age}</p>
          )}

          {/* Email */}
          <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
            email
          </label>
          <input
            name="email"
            type="email"
            placeholder="enter email"
            onChange={handleChange}
            className="border p-3 rounded-lg mb-3 w-full border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ml-2">{errors.email}</p>
          )}

          {/* Password */}
          <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
            password
          </label>
          <input
            name="password"
            type="password"
            placeholder="enter password"
            onChange={handleChange}
            className="border p-3 rounded-lg mb-3 w-full border-gray-300"
          />
          {errors.password && (
            <p className="text-red-500 text-sm ml-2">{errors.password}</p>
          )}

          {/* Gender */}

          {/* Birthdate */}
          <div className="flex-1">
            <label className="block text-[20px] mb-[5px] pl-2.5 text-gray-500">
              Tug'ilgan sana
            </label>
            <DatePicker
              selected={birthdate}
              onChange={(date) => setBirthdate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Tug'ilgan sana"
              className="border p-3 rounded-lg mb-3 w-full border-gray-300"
            />
            {errors.birthdate && (
              <p className="text-red-500 text-sm ml-2">{errors.birthdate}</p>
            )}
          </div>

          <button
            type="submit"
            className="p-4 mt-4 w-full rounded-lg text-white bg-[#101c48] text-[15px] font-medium hover:opacity-80 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </section>
  );
}
