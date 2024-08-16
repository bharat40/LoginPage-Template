import farmBG2 from "./assets/images/farmBG2.jpg";
import LoginPage from "./components/LoginPage";
const App = () => {
  return (
    <div className="flex">
      <img
        src={farmBG2}
        alt="farm-image"
        className="hidden lg:block w-1/2 h-screen"
      />
      <div className="flex flex-col justify-center items-center text-center h-screen lg:w-1/2 max-lg:w-full bg-gray-200 font-mono">
        <LoginPage />
      </div>
    </div>
  );
};
export default App;
