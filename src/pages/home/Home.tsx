import { useEffect, useState } from "react";
import "./home.css";
import { ToDoListCar } from "../../components/ToDoListCar";
import { SearchTask } from "../../components/SearchTask";
import { FilterTask } from "../../components/FilterTask";
import fundoTitle from "../../assets/borderTexto.png";

import { FaLightbulb } from "react-icons/fa";

export const Home = () => {
  const [isEntryFormOpen, setIsEntryFormOpen] = useState(false);

  const [search, setSearch] = useState<string>("");

  const [filter, setFilter] = useState("all");

  const [order, setOrder] = useState("Asc");

  const [listTodosTasks, setListTodosTasks] = useState<any[]>(() => {
    try {
      const listTasks = localStorage.getItem("listTasks");

      return listTasks ? JSON.parse(listTasks) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("listTasks", JSON.stringify(listTodosTasks));
  }, [listTodosTasks]);

  function openCloseIsEntryFormOpen() {
    setIsEntryFormOpen(!isEntryFormOpen);
  }

  const addTask = (title: string, description: string, dueDate: string) => {
    const newTask = [
      ...listTodosTasks,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        dueDate,
        isCompleted: false,
      },
    ];

    setListTodosTasks(newTask);

    openCloseIsEntryFormOpen();
  };

  const removeTask = (id: number) => {
    const listTasks = [...listTodosTasks];

    const newTasks = listTasks.filter((task) => (task.id !== id ? task : null));

    setListTodosTasks(newTasks);
  };

  const toComplete = (id: number) => {
    const listTask = [...listTodosTasks];

    listTask.map((task) =>
      task.id === id ? (task.isCompleted = !task.isCompleted) : task
    );

    setListTodosTasks(listTask);
  };

  const updateTask = (id: number, newTitle: string, newDescription: string) => {
    const listTask = [...listTodosTasks];

    listTask.map((task) =>
      task.id === id
        ? ((task.title = newTitle), (task.description = newDescription))
        : task
    );

    setListTodosTasks(listTask);
  };

  const getOverdueTasks = () => {
    const today = new Date().toISOString().split("T")[0]; // Formata a data no formato YYYY-MM-DD
    return listTodosTasks.filter(
      (task) => task.dueDate < today && !task.isCompleted
    );
  };

  return (
    <div className="h-screen sm:px-16 md:px-2 mt-2 mb-2 lg:px-20 px-5 bg-fundo bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center">
        <div className="titulo mt-4">
          <h1 className="text-zinc-900 font-great text-center text-3xl md:text-4xl font-extrabold">
            To Do List
          </h1>
          <img src={fundoTitle} alt="" />
        </div>

        <div className="lg:w-5/6 sm:w-full md:w-full m-4 w-full md:px-4 space-y-2 font-poppins">
          <SearchTask search={search} setSearch={setSearch} />
          <FilterTask
            filter={filter}
            setFilter={setFilter}
            setOrder={setOrder}
          />
        </div>

        <div className="conteudo_principal w-full flex flex-col md:flex-row md:items-start items-center justify-between gap-3 md:gap-6 sm:px-2 font-poppins">
          <ToDoListCar
            listTodosTasks={listTodosTasks}
            removeTask={removeTask}
            toComplete={toComplete}
            openCloseIsEntryFormOpen={openCloseIsEntryFormOpen}
            isEntryFormOpen={isEntryFormOpen}
            dados={addTask}
            updateTask={updateTask}
            search={search}
            filter={filter}
            order={order}
          />

          <div className="cards w-full space-y-2 sm:w-[60%] font-poppins">
            <div className="notes w-full rounded-lg border-2 p-2 bg-remember text-center">
              <h2 className="font-semibold flex items-center justify-center gap-2 text-zinc-100">
                Atrasadas
                <FaLightbulb className="text-2xl text-yellow-500 animate-pulse" />
              </h2>

              <ul>
                {getOverdueTasks().map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between border-b p-2 rounded"
                  >
                    <h3 className="font-semibold text-red-600">{task.title}</h3>
                    <p className="text-zinc-200">{task.dueDate}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
