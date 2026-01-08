import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <>
      <form action="" className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For Products"
        />
        <button type="submit">
          {" "}
          <IoSearch />{" "}
        </button>
      </form>
    </>
  );
}
