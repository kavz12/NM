import React, { useState } from "react";

export default function Email({ setPage, setemail }) {
  const [tempEmail, setTempEmail] = useState("");

  const handleSubmit = () => {
    setemail(tempEmail);
    setPage(1); // Go to PersonalData page
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border-amber-200 p-10 h-[300px] w-[500px] flex flex-col justify-center items-center bg-amber-200 gap-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-secondary w-full"
          value={tempEmail}
          onChange={(e) => setTempEmail(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
