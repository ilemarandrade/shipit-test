import React from "react";

const loading = () => {
  return (
    <div
      className="text-indigo-900 w-full flex justify-center items-center"
      style={{ minHeight: "90vh", fontSize: "2em", background: "#e5f3fa", width: "100vw" }}
    >
      <p>Espere un momento...</p>
    </div>
  );
};

export default loading;
