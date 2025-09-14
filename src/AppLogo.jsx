import React from "react";

const AppLogo = React.memo(() => {
  return (
    <div className="logo">
      <img src="/src/assets/react_logo.png" alt="logo" />
    </div>
  );
});

export default AppLogo;
