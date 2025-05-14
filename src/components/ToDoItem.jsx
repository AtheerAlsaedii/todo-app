import React, { useRef, useState } from "react";
import checkBox from "../assets/checkBox.svg";
import checked from "../assets/checked.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
const ToDoItem = ({ item, updateToDoState, deleteToDo, editToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();
  const handleSave = () => {
    const newTitle = inputRef.current.value.trim();
    if (newTitle) {
      editToDo(item.id, newTitle);
      setIsEditing(false);
    }
  };
  return (
    <div className="flex flex-row justify-between p-3 border-b-2 border-p2 transition-transform transform hover:scale-102 duration-300">
      <div className="flex flex-row space-x-1.5 lg:space-x-2">
        <img
          alt="checkBox"
          className="w-5"
          onClick={() => updateToDoState(item.id)}
          src={item.isCompleted ? checked : checkBox}
        />
        {isEditing ? (
          <input
            type="text"
            defaultValue={item.title}
            ref={inputRef}
            onBlur={handleSave}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSave();
              }
            }}
            className="bg-p2 rounded-sm h-5 md:h-7 w-[80%] font-montserrat p-3 text-sm md:text-base"
          />
        ) : (
          <p
            className="font-montserrat truncate w-[160px] md:w-[220px] overflow-hidden"
            onClick={() => setIsEditing(true)}
          >
            {item.title}
          </p>
        )}
      </div>
      <div className="flex flex-row space-x-1 lg:space-x-2 pl-1.5">
        <button>
          <TbEdit
            className="w-6 h-6 hover:text-p4"
            onClick={() => setIsEditing(true)}
          />
        </button>
        <button onClick={() => deleteToDo(item.id)}>
          <RiDeleteBin6Line className="w-6 h-6 hover:text-p4" />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
