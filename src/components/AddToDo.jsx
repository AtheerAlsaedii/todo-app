import React from "react";
import { IoAddSharp } from "react-icons/io5";

const AddToDo = ({ addToDo, inputRef }) => {
  return (
    <div className="bg-p1 p-6 rounded-3xl">
      <h2 className="font-bebas pb-0.5 pl-1">Add new task:</h2>
      <form onSubmit={addToDo} className="flex flex-row">
        <input
          type="text"
          placeholder="Task title ..."
          className="bg-p2 rounded-md h-8 md:h-10 w-[85%] font-montserrat p-3 rounded-r-none"
          ref={inputRef}
        />
        <button
          type="submit"
          className="bg-p4 hover:bg-p5 h-8 md:h-10 w-[15%] rounded-md rounded-l-none flex items-center justify-center transition-all duration-300"
        >
          <IoAddSharp className="text-p1 text-xl hover:scale-110" />
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
