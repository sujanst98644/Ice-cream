import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Home from "./components/home";

function App() {
  const [Dark, setDark] = useState(true);
  useEffect(() => {
    if (Dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [Dark]);

  const toggleDark = () => {
    setDark(!Dark);
  };
  return (
    <div
      className={`${
        Dark && "dark"
      } bg-[#F2F2F2] dark:bg-[#283646] min-h-screen min-w-full`}
    >
      <Home />
      <button
        onClick={() => toggleDark()}
        className="bg-slate-400 text-2xl rounded-full p-2 fixed bottom-4 right-4 dark:text-white"
      >
        {
          Dark && <IoSunny /> // render sunny when dark is true
        }
        {
          !Dark && <IoMoon /> // render moon when dark is false
        }
      </button>
    </div>
  );
}

export default App;
