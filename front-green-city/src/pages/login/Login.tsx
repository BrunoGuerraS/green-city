import { useForm } from "react-hook-form";
import "./Login.css";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <aside className="Login-bg w-[100vw] h-[100vh]">
      <div className="bg-black bg-opacity-40 w-[40%] h-[100vh]">
        <h2 className="text-center bg-black text-white py-5">INICIAR SESIÓN</h2>
        <div className="">
            <h2 className="text-white text-center text-[3rem] font-bold mt-20">Green-City</h2>
          <form className="flex flex-col px-28 mt-20">
            <input
              className="bg-transparent border-2 border-transparent border-b-green-700 text-xl text-white mb-12 pb-2 outline-none"
              type="text"
              placeholder="email"
            />
            <input
              className="bg-transparent border-2 border-transparent border-b-green-700 text-xl text-white pb-2 outline-none"
              type="password"
              placeholder="password"
            />
            <button className="mt-14 py-2 w-[30%] mx-auto rounded-lg text-white bg-[#8DB600]">ENTRAR</button>
          </form>
        </div>
      </div>
    </aside>
  );
};
