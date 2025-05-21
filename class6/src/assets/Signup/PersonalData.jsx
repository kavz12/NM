import React, { useState } from "react";

export default function PersonalData({
  setusername,
  setphonenum,
  setaddress,
  setlandmark,
  handlesubmit,
}) {
  const [localUsername, setLocalUsername] = useState("");
  const [localPhone, setLocalPhone] = useState("");
  const [localAddress, setLocalAddress] = useState("");
  const [localLandmark, setLocalLandmark] = useState("");

  const handleLocalSubmit = () => {
    setusername(localUsername);
    setphonenum(localPhone);
    setaddress(localAddress);
    setlandmark(localLandmark);
    handlesubmit();
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border-amber-200 p-10 h-auto w-[500px] flex flex-col justify-center items-center bg-amber-100 gap-3">
        <input
          type="text"
          placeholder="Username"
          className="input input-secondary w-full"
          onChange={(e) => setLocalUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-secondary w-full"
          onChange={(e) => setLocalPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="input input-secondary w-full"
          onChange={(e) => setLocalAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Landmark"
          className="input input-secondary w-full"
          onChange={(e) => setLocalLandmark(e.target.value)}
        />
        <button className="btn btn-primary mt-3" onClick={handleLocalSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
