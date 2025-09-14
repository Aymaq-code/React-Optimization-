import { memo } from "react";

function AppBody({ value }) {
  return (
    <div className="appBody">
      <div className="contents">
        <h3>The Result of Counter</h3>
        <p>Counter: {value}</p>
      </div>
    </div>
  );
}

export default memo(AppBody);
