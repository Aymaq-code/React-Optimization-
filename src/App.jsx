import { useCallback, useState } from "react";
import AppHead from "./AppHead";
import AppBody from "./AppBody";
import AppButtons from "./AppButtons";

function App() {
  const [dark, setDark] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <div className={dark ? "container" : "light"}>
      <AppHead onToggle={handleToggle} dark={dark} />
      <AppBody value={value} />
      <AppButtons setValue={setValue} />
    </div>
  );
}

export default App;
