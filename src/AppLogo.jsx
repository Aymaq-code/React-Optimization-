import { memo } from "react";
import LOGO from "./assets/react_logo.png";
function AppLogo() {
  return (
    <div className="logo">
      <img src={LOGO} alt="logo" />
    </div>
  );
}

export default memo(AppLogo);
