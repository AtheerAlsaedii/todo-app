import React, { useEffect, useMemo, useRef, useState } from "react";
import ToDoItem from "./toDoItem";
import AddToDo from "./AddToDo";
import Progress from "./Progress";
const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const inputRef = useRef();

  // Add , complete, delete task //
  const addToDo = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== "") {
      const newItem = {
        id: Date.now(),
        title: inputValue,
        isCompleted: false,
      };
      setToDoList((prev) => [...prev, newItem]);
      console.log(newItem);
      inputRef.current.value = "";
    }
  };
  const updateToDoState = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  const editToDo = (id, newTitle) => {
    console.log(id);
    console.log(newTitle);
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };
  const deleteToDo = (id) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
  };
  const { completedCount, total, toDoProgress } = useMemo(() => {
    const completedCount = toDoList.filter((t) => t.isCompleted).length;
    const total = toDoList.length;
    const toDoProgress = total > 0 ? (completedCount / total) * 100 : 0;

    return { completedCount, total, toDoProgress };
  }, [toDoList]);

  // localStorage ://
  useEffect(() => {
    try {
      const storedToDoList = JSON.parse(localStorage.getItem("toDoList"));
      if (storedToDoList) {
        setToDoList(storedToDoList);
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }
  }, []);
  useEffect(() => {
    try {
      if (toDoList.length > 0) {
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
      }
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [toDoList]);

  return (
    <div className="lg:border-p1 lg:border-2 lg:rounded-2xl lg:shadow-lg flex flex-col lg:flex-row-reverse w-full md:w-[50%] xl:w-[60%] mx-auto p-6 justify-between items-center gap-y-3">
      {/*Input section*/}
      <div className="w-[100%] lg:w-[40%] space-y-4">
        <Progress
          progress={toDoProgress}
          completedCount={completedCount}
          total={total}
        />
        <AddToDo addToDo={addToDo} inputRef={inputRef} />
      </div>
      {/*Display items*/}
      <div className="bg-p1 w-full lg:w-[50%] max-h-[450px] rounded-3xl p-3 overflow-hidden">
        <h2 className="font-bebas p-4  text-lg md:text-xl">To Do List</h2>
        <hr className="border-t border-gray-300 my-2" />
        <div className="h-[330px] py-3 overflow-y-auto overflow-x-hidden custom-scroll">
          {toDoList.length === 0 ? (
            <p className="text-center text-gray-500 text-base md:text-lg font-semibold ">
              Start your tasks now !
              <span role="img" aria-label="motivational">
                🚀
              </span>
            </p>
          ) : (
            toDoList.map((item) => (
              <ToDoItem
                key={item.id}
                item={item}
                updateToDoState={updateToDoState}
                editToDo={editToDo}
                deleteToDo={deleteToDo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
