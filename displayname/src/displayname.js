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
  const handlesubmit = () => {
    // e.preventDefault();
    if(firstname.trim() !== '' && lastname.trim() !== '')
    {
    setFullname(`${firstname} ${lastname}`);
    }
    
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form action="/action_page.php">
        <label>FirstName:</label>
        <input type="text" value={firstname} onChange={handleFname} required />
        <br />
        <label>LastName:</label>
        <input type="text" value={lastname} onChange={handleLname} required />
        <br />
        <button onClick={handlesubmit}>Submit</button>
      </form>
      {fullname && <p>Full Name : {fullname}</p>}
    </div>
  );
}
export default Display;
