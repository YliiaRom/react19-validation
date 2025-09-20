import { changeTheme } from "@/features/api/themeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ToggleTheme() {
  const [theme, setTheme] = useState("dark");
  const dispatch = useDispatch();
  const handlerTheme = (newTheme) => {
    setTheme(newTheme);
    dispatch(changeTheme(newTheme));
  };
  return (
    <div className="toggleTheme">
      <button onClick={() => handlerTheme("light")}>white</button>
      <button onClick={() => handlerTheme("dark")}>black</button>
    </div>
  );
}

export default ToggleTheme;
