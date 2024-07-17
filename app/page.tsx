"use client";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import { CiRedo, CiUndo } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import Todo, { init } from "./components/todo";
import { generateId } from "./helpers/IdGenerator";
import { getState, setState } from "./helpers/localStorageController";

const typedValue = {
  wait: { type: "wait", selector: "" },
  fill: { type: "fill", selector: "", text: "", delay: 0 },
  delay: { type: "delay", delay: 0 },
  click: { type: "click", selector: "" },
};

const Home = () => {
  const [currentState, setCurrentState] = useState<init[]>([]);

  useEffect(() => {
    const current = getState("currentState");
    if (current) setCurrentState([...current]);
  }, []);

  const updateStateAndLocalStorage = (updatedState: init[]) => {
    setState("currentState", updatedState);
    setCurrentState(updatedState);
  };

  const handleCreateTodo = () => {
    const prevState = getState("prevState")
      ? [...getState("prevState"), currentState]
      : [currentState];
    setState("prevState", prevState);
    const newTodo: init = {
      id: generateId(),
      type: "wait",
      selector: "",
    };
    updateStateAndLocalStorage([...currentState, newTodo]);
  };

  const handleTypeChange = (
    id: string,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    if (value in typedValue) {
      const updatedState = currentState.map((item) =>
        item.id === id
          ? { ...typedValue[value as keyof typeof typedValue], id }
          : item
      );
      const prevState = getState("prevState")
        ? [...getState("prevState"), currentState]
        : [currentState];
      setState("prevState", prevState);
      updateStateAndLocalStorage(updatedState);
    }
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedState = currentState.map((item) =>
      item.id === id ? { ...item, [e.target.name]: e.target.value } : item
    );
    updateStateAndLocalStorage(updatedState);
  };

  const handleRemoveItem = (id: string) => {
    const updatedState = currentState.filter((item) => item.id !== id);
    const prevState = getState("prevState")
      ? [...getState("prevState"), currentState]
      : [currentState];
    setState("prevState", prevState);
    updateStateAndLocalStorage(updatedState);
  };

  const handleCloneItem = (id: string) => {
    const index = currentState.findIndex((item) => item.id === id);
    if (index !== -1) {
      const clonedItem: init = { ...currentState[index], id: generateId() };
      const updatedState = [
        ...currentState.slice(0, index + 1),
        clonedItem,
        ...currentState.slice(index + 1),
      ];
      const prevState = getState("prevState")
        ? [...getState("prevState"), currentState]
        : [currentState];
      setState("prevState", prevState);
      updateStateAndLocalStorage(updatedState);
    }
  };

  const handleClearItem = () => {
    const prevState = getState("prevState")
      ? [...getState("prevState"), currentState]
      : [currentState];
    setState("prevState", prevState);
    updateStateAndLocalStorage([]);
  };

  const handleJSONChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    try {
      const parsedJson = JSON.parse(value);
      if (Array.isArray(parsedJson)) {
        updateStateAndLocalStorage(parsedJson);
      }
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    const items = Array.from(currentState);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    updateStateAndLocalStorage(items);
  };

  const goToPrevState = () => {
    const prevState = getState("prevState");
    if (prevState && prevState.length > 0) {
      const nextState = getState("nextState")
        ? [...getState("nextState"), currentState]
        : [currentState];
      setState("nextState", nextState);
      const lastState = prevState.pop();
      setState("prevState", prevState);
      setCurrentState(lastState);
    }
  };

  const goToNextState = () => {
    const nextState = getState("nextState");
    if (nextState && nextState.length > 0) {
      const prevState = getState("prevState")
        ? [...getState("prevState"), currentState]
        : [currentState];
      setState("prevState", prevState);
      const lastState = nextState.pop();
      setState("nextState", nextState);
      setCurrentState(lastState);
    }
  };

  return (
    <div className="min-h-screen w-full p-10">
      <h2 className="font-semibold">Browser Instruction List</h2>
      <div className="w-full h-full flex justify-between mt-10 gap-x-4 items-start">
        <div className="w-8/12">
          <div className="flex justify-end items-center gap-x-2">
            <CiUndo
              className="p-0.5 w-7 h-7 shadow-sm border cursor-pointer rounded-md"
              onClick={goToPrevState}
            />
            <CiRedo
              className="p-0.5 w-7 h-7 shadow-sm border cursor-pointer rounded-md"
              onClick={goToNextState}
            />
            <button
              className="p-1 shadow-sm border cursor-pointer text-sm rounded-md"
              onClick={handleClearItem}
            >
              Clear
            </button>
            <IoAdd
              className="p-0.5 w-7 h-7 shadow-sm border cursor-pointer rounded-md"
              onClick={handleCreateTodo}
            />
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="w-full flex flex-col gap-y-2 mt-4"
                >
                  {currentState.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Todo
                            id={item.id}
                            type={item.type}
                            selector={item.selector}
                            text={item.text}
                            delay={item.delay}
                            handleTypeChange={handleTypeChange}
                            handleChange={handleChange}
                            handleRemoveItem={handleRemoveItem}
                            handleCloneItem={handleCloneItem}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="w-4/12">
          <h4 className="font-semibold">JSON Output</h4>
          <div className="flex justify-between mt-2 items-center">
            <button className="p-1 shadow-sm border cursor-pointer text-sm rounded-md">
              Export
            </button>
            <button className="p-1 shadow-sm border cursor-pointer text-sm rounded-md">
              Import
            </button>
          </div>

          <div className="w-full h-full mt-5">
            <textarea
              className="w-full h-96 shadow-sm outline-none border p-2 rounded-md text-sm text-gray-700"
              name="json"
              value={JSON.stringify(currentState, null, 2)}
              onChange={handleJSONChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
