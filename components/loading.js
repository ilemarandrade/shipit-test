import React from "react";

const loading = () => {
  console.log();
  return (
    <div
      className="text-indigo-900 w-full flex justify-center items-center"
      style={{ minHeight: "90vh", fontSize: "2em" }}
    >
      <p>Espere un momento...</p>
    </div>
  );
};

export default loading;
