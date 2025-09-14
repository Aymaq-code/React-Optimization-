import React, { memo } from "react";
import AppLogo from "./AppLogo";

function AppHead({ onToggle, dark }) {
  return (
    <div className="appHead">
      <AppLogo />
      <h1>React Optimization</h1>
      <button onClick={onToggle}>{!dark ? "☀️" : "🌙"}</button>
    </div>
  );
}

export default memo(AppHead);
