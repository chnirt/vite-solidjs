import { useCallback, useEffect, useState } from "react";
// import localforage from "localforage";

type ThemeInput = string | null;
type CallbackType = (mothInput: ThemeInput) => void;

function useDarkMode(themeInput: ThemeInput) {
  const [mode, setMode] = useState<ThemeInput>(themeInput);

  useEffect(() => {
    (async () => {
      try {
        // const theme = await localforage.getItem("theme");
        const theme = localStorage.getItem("theme");
        // This code runs once the value has been loaded
        // from the offline store.

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
          theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          setMode("dark");
        } else {
          document.documentElement.classList.remove("dark");
          setMode("light");
        }
      } catch (err) {
        // This code runs if there were any errors.
        console.log(err);
      }
    })();
  }, [mode]);
  const handleSetMode = useCallback<CallbackType>(async (modeInput) => {
    switch (modeInput) {
      case "light": {
        // await localforage.setItem("theme", modeInput);
        localStorage.setItem("theme", modeInput);
        setMode("light");
        break;
      }
      case "dark": {
        // await localforage.setItem("theme", modeInput);
        localStorage.setItem("theme", modeInput);
        setMode("dark");
        break;
      }
      default: {
        // await localforage.removeItem("theme");
        localStorage.removeItem("theme");
        setMode(null);
      }
    }
  }, []);

  return [mode, handleSetMode] as const;
}

export default useDarkMode;
