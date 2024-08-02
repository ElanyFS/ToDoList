import { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillEdit,
  AiFillExclamationCircle,
  AiOutlineTag,
} from "react-icons/ai";
import { Button } from "./Button";

interface taskItemProps {
  task: any;
  removeTask: (id: number) => void;
  toComplete: (id: number) => void;
  updateTask: (id: number, newTitle: string, newDescription: string) => void;
}

export const TaskItem = ({
  task,
  removeTask,
  toComplete,
  updateTask,
}: taskItemProps) => {
  const controlUpdatePrompt = () => {
    const newTitle = prompt("Tarefa: ", task.title);
    const newDescription = prompt("Descrição: ", task.description);

    if (newTitle !== null && newDescription !== null) {
      updateTask(task.id, newTitle, newDescription);
    }
  };

  const [modalDescription, seModalDescription] = useState(false);

  const [taskSelect, setTaskSelect] = useState("");

  const openDescription = (description: string) => {
    seModalDescription(!modalDescription);

    setTaskSelect(description);
  };

  function closeDescription() {
    seModalDescription(false);
  }

  const colorCardTask = task.isCompleted
    ? "border-2 border-[#628280] bg-[#abdddb] line-through text-[#628280]"
    : "border-2 border-zinc-100 text-[#628280]";

  return (
    <div
      className={`w-full flex items-center justify-between gap-3 relative rounded-lg p-2 ${colorCardTask}`}
      key={task.id}
    >
      <div className="flex justify-between items-center gap-2 box-border overflow-auto">
        <AiOutlineTag className="size-5 md:size-6" />
        <p className="flex-1 md:text-xl box-border break-words overflow-y-auto">
          {task.title}
        </p>
      </div>

      <div className="buttons_options flex items-center gap-1 relative">
        <button onClick={() => openDescription(task.description)}>
          <AiFillExclamationCircle className="size-5 text-yellow-700" />
        </button>

        {!task.isCompleted && (
          <>
            <button>
              <AiFillEdit
                onClick={() => controlUpdatePrompt()}
                className="font-bold size-5 text-sky-600"
              />
            </button>

            <button>
              <AiFillCloseCircle
                onClick={() => removeTask(task.id)}
                className="font-bold size-5 text-red-600"
              />
            </button>
          </>
        )}

        <button>
          <AiFillCheckCircle
            onClick={() => toComplete(task.id)}
            className="font-bold size-5 text-green-500"
          />
        </button>
      </div>

      {modalDescription && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-3 z-[1900]">
          <div className="w-[664px] bg-zinc-200 rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="flex items-center justify-end">
              <Button
                variant="secondary"
                size="padding"
                onClick={closeDescription}
              >
                <AiFillCloseCircle className="size-5 text-red-600" />
              </Button>
            </div>

            <div className="border-2">
              <p className="text-red-500">{taskSelect}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
