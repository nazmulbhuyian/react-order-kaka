import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../shared/base-url/BASE_URL";

const SignIn = () => {

  const { register, handleSubmit, formState: { errors }, reset, } = useForm();

  const navigate = useNavigate();
  const handleSignIn = async (data) => {
    // const sendData = {
    //   user_name: data?.user_name,
    //   password: data?.password
    // }
    // fetch(`${BASE_URL}/login`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(sendData),
    // })
    //   .then((response) => response.json())
    //   .then((infoData) => {
    //     if (infoData?.success === true && infoData?.statusCode === 200) {
    // toast.success("Login Successfull")
    //       reset()
    //       navigate("/home");
    //     } else {
    // toast.error(infoData?.message)
    //     }
    //   }
    //   )
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center md:min-h-screen py-10 bg-[#D4D3D3]">
      <div className="w-full mx-3 md:w-[400px] px-3 md:px-10 pt-5 pb-14 border rounded bg-[#F1F5F9] shadow-md">
        <h2 className="text-2xl text-center text-gray-900 my-4 font-bold border-b pb-2">
          Login
        </h2>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="form-control w-full">
            <label htmlFor="user_name" className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              id="user_name"
              type="text"
              placeholder="Enter your Name"
              className="border rounded px-3 py-2 w-full"
              {...register("user_name", {
                required: "Name is required",
              })}
            />
            {errors.user_name && (
              <p className="text-red-600"> {errors?.user_name?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="* * * * *"
              className="border rounded px-3 py-2 w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <button
            className="px-10 py-2 text-white bg-[#383B52] w-full opacity-100 hover:opacity-80 transition-opacity duration-200 ease-in-out rounded-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
