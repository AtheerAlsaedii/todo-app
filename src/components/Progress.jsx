import React from "react";

const Progress = ({ progress, total, completedCount }) => {
  return (
    <div className="bg-p1 p-6 rounded-3xl flex flex-col justify-between gap-2">
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-col justify-between gap-4">
          <h2 className="font-bebas text-lg md:text-xl font-bold">Todo Done</h2>
          <p className="font-montserrat text-sm md:text-lg text-gray-600">
            {completedCount === total ? "Great job!" : "Keep it up!"}
          </p>
        </div>
        <div className="bg-p4 w-20 h-20 rounded-full flex items-center justify-center">
          <p className="font-montserrat font-bold text-2xl">
            {completedCount}/{total}
          </p>
        </div>
      </div>
      <progress
        value={progress}
        max="100"
        className="w-full h-4 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-p4 [&::-moz-progress-bar]:bg-p4"
        aria-label="To Do list progress"
      ></progress>
    </div>
  );
};

export default Progress;
