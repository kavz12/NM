import React, { useEffect, useState } from "react";
import Email from "./Email";
import PersonalData from "./PersonalData";

export default function Register() {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");

  useEffect(() => {
    console.log("Rendering");
  }, [page, username]);

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Phone:", phonenum);
    console.log("Address:", address);
    console.log("Landmark:", landmark);
  };

  return (
    <div>
      {page === 0 ? (
        <Email setPage={setPage} setemail={setEmail} />
      ) : (
        <PersonalData
          setusername={setUsername}
          setphonenum={setPhonenum}
          setaddress={setAddress}
          setlandmark={setLandmark}
          handlesubmit={handleSubmit}
        />
      )}
    </div>
  );
}
