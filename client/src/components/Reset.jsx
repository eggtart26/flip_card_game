import React from "react";

function Reset(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <button onClick={refreshPage}>Reset Button</button>
    </div>
  );
}

export default Reset;
