const LoginPage = () => {
  return (
    <div className=" flex flex-col gap-8 items-center justify-center max-h-max max-w-max border  shadow-md p-8 rounded-md bg-gray-100">
      <h1 className="text-3xl font-bold text-emerald-500">WELCOME BACK!</h1>
      <div className="flex flex-col gap-3 text-center">
        <div className="flex gap-3">
          <span>👤</span>
          <input
            type="text"
            placeholder="Username"
            className="p-1 border shadow-sm  bg-gray-100 outline-green-500"
          />
        </div>
        <div className="flex gap-3">
          <span>🔑</span>
          <input
            type="password"
            placeholder="Password"
            className="p-1 border shadow-sm t bg-gray-100 outline-green-500"
          />
        </div>
        <div className="flex flex-col my-4 gap-3">
          <button
            type="submit"
            className="py-2 px-1 font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md rounded-md duration-500"
          >
            login
          </button>
          <span className="text-right hover:text-emerald-500 hover:underline">
            forgot password?
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
