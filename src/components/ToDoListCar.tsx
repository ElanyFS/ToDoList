import { AiOutlinePlusCircle } from "react-icons/ai";
import { IsEntryFormOpen } from "./IsEntryFormOpen";
import { TaskItem } from "./TaskItem";
import { Button } from "./Button";
import { useState } from "react";

interface toDoListProps {
  listTodosTasks: any[];
  removeTask: (id: number) => void;
  toComplete: (id: number) => void;
  openCloseIsEntryFormOpen: () => void;
  isEntryFormOpen: boolean;
  dados: (title: string, description: string, dueDate: string) => void;
  updateTask: (id: number, newTitle: string, newDescription: string) => void;
  search: string;
  filter: string;
  order: string;
}

export const ToDoListCar = ({
  removeTask,
  toComplete,
  listTodosTasks,
  openCloseIsEntryFormOpen,
  isEntryFormOpen,
  dados,
  updateTask,
  search,
  filter,
  order,
}: toDoListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;

  const filterSearchTask = listTodosTasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter((task) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? task.isCompleted
        : !task.isCompleted
    )
    .sort((x, y) =>
      order === "Asc"
        ? x.title.localeCompare(y.title)
        : y.title.localeCompare(x.title)
    );

  const totalPages = Math.ceil(filterSearchTask.length / tasksPerPage);

  const currentTasks = filterSearchTask.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="toDoList rounded-3xl border-2 p-2 w-full bg-primary flex flex-col items-center space-y-3 relative">
      <h2 className="font-semibold">To Do List</h2>
      {currentTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toComplete={toComplete}
          updateTask={updateTask}
        />
      ))}

      <div className="">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 ${
              currentPage === index + 1
                ? "border-2 border-[#628280] text-[#628280]"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Button
        variant="primary"
        size="padding"
        onClick={openCloseIsEntryFormOpen}
      >
        <AiOutlinePlusCircle className="size-5" />
        Criar Tarefa
      </Button>

      {isEntryFormOpen && (
        <IsEntryFormOpen
          text="Inserir Nova Tarefa"
          dados={dados}
          btnOpenClose={openCloseIsEntryFormOpen}
        />
      )}
    </div>
  );
};
