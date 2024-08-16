import { useState } from "react";
import farmBG2 from "./assets/images/farmBG2.jpg";
import LoginPage from "./components/LoginPage";
import SignIn from "./components/SignIn";
const App = () => {
  const [comp, setComp] = useState(<LoginPage />);
  const [data, setData] = useState("New User?");
  const changeData = () => {
    if (data === "New User?" || comp == <LoginPage />) {
      setData("Already a User?");
      setComp(<SignIn />);
    } else {
      setData("New User?");
      setComp(<LoginPage />);
    }
  };
  return (
    <div className="flex">
      <img
        src={farmBG2}
        alt="farm-image"
        className="hidden lg:block w-1/2 h-screen"
      />
      <div className="flex flex-col justify-center items-center text-center h-screen lg:w-1/2 max-lg:w-full bg-gray-200 font-mono">
        {comp}
        <button
          onClick={changeData}
          className="px-3 py-2 rounded-md bg-emerald-500 text-white font-bold my-2 hover:bg-emerald-600 shadow-md duration-500"
        >
          {data}
        </button>
      </div>
    </div>
  );
};
export default App;
