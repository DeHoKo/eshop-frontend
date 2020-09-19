import React, { useState } from "react";

const Backdrop = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <React.Fragment>
      {isVisible ? (
        <div className="bg-black bg-opacity-25 z-10 fixed inset-0"></div>
      ) : null}
    </React.Fragment>
  );
};

export default Backdrop;
