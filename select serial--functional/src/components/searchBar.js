import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState(props.initialValue);
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search for a serial"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <button className="btn btn-outline-primary" type="submit">
          search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
