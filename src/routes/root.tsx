import { useCallback } from "react";
import useDarkMode from "../hooks/useMode";
import StyleGuide from "../screens/StyleGuide";

const Root = () => {
  const [mode, setMode] = useDarkMode("light");

  const toggleMode = useCallback(() => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  }, [mode, setMode]);

  return (
    <div className="container">
      <button className="bg-red-500 text-white p-2" onClick={toggleMode}>
        {mode === "dark" ? "*" : null} dark
      </button>
      <StyleGuide />
    </div>
  );
};

export default Root;
