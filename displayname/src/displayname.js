import React, { useState } from "react";

function Display() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");


  const handleFname = (e) => {
    setFirstname(e.target.value);
    
  };
  const handleLname = (e) => {
    setLastname(e.target.value);
   
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if(firstname.trim() !== '' && lastname.trim() !== '')
    {
    setFullname(`${firstname} ${lastname}`);
    }
    
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form  onSubmit={handlesubmit}>
        <label>First Name:</label>
        <input type="text" value={firstname} onChange={handleFname} required />
        <br />
        <label>Last Name:</label>
        <input type="text" value={lastname} onChange={handleLname} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullname && <p>Full Name: {fullname}</p>}
    </div>
  );
}
export default Display;
