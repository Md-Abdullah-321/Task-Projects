import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface TodoProps {
  id: string;
  type: string | "";
  selector: string | "";
  text: string | "";
  delay: number | 0;
  handleTypeChange: Function;
  handleChange: Function;
  handleRemoveItem: Function;
  handleCloneItem: Function;
}

const Todo: React.FC<TodoProps> = (props) => {
  const {
    id,
    type,
    selector,
    text,
    delay,
    handleTypeChange,
    handleChange,
    handleRemoveItem,
    handleCloneItem,
  } = props;

  return (
    <div className="flex items-center gap-x-2 border p-1.5 rounded-md">
      <div>
        <FaBars className="p-0.5 w-7 h-7 shadow-sm border cursor-pointer rounded-md" />
      </div>
      <select
        name="type"
        value={type}
        className="outline-none border p-1 shadow-sm border cursor-pointer text-sm rounded-md"
        onChange={(e) => handleTypeChange(id, e)}
      >
        <option value="wait">Wait</option>
        <option value="fill">Fill</option>
        <option value="click">Click</option>
        <option value="delay">Delay</option>
      </select>
      {/* Add selector, text and delay based on type  */}
      {(type === "wait" || type === "fill" || type === "click") && (
        <input
          type="text"
          className="outline-none border p-0.5 rounded-md w-full"
          placeholder="Enter Selector"
          name="selector"
          value={selector}
          onChange={(e) => handleChange(id, e)}
        />
      )}
      {type === "fill" && (
        <input
          type="text"
          className="outline-none border p-0.5 rounded-md w-full"
          placeholder="Enter text"
          name="text"
          value={text}
          onChange={(e) => handleChange(id, e)}
        />
      )}
      {(type === "fill" || type === "delay") && (
        <input
          type="number"
          className="outline-none border p-0.5 rounded-md w-full"
          placeholder="Enter Delay"
          name="delay"
          value={delay}
          onChange={(e) => handleChange(id, e)}
        />
      )}
      <button
        className="p-1 shadow-sm border cursor-pointer text-sm rounded-md"
        onClick={() => handleCloneItem(id)}
      >
        Clone
      </button>
      <div>
        <IoCloseOutline
          className="p-0.5 w-7 h-7 shadow-sm border cursor-pointer rounded-md"
          onClick={() => handleRemoveItem(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
