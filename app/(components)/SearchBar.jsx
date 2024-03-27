import React from "react";
export default function SearchBar() {
  return (
    <div className="bg-slate-100 w-full">
      <form className="flex flex-row justify-start items-center gap-2 w-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="  Search for products..."
          className="outline-none w-full bg-slate-100"
        />
      </form>
    </div>
  );
}
