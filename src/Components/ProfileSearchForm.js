import React, { useState } from "react";
import './ProfileSearchForm.css'; 

function ProfileSearchForm({ search }) {
  let [inputValue, setInputValue] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    search(inputValue);
    setInputValue("");
  };

  return (
    
    <form className="profile-search-form" onSubmit={handleSubmit}>
      <label htmlFor="username">GitHub Username:</label>
      <input
        type="text"
        id="username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default ProfileSearchForm;
