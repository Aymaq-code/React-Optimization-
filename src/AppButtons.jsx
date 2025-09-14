import { memo } from "react";

function AppButtons({ setValue }) {
  return (
    <div className="contents__footer">
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue((c) => c - 1)}>-</button>
      <button onClick={() => setValue((c) => c + 1)}>+</button>
    </div>
  );
}

export default memo(AppButtons);
