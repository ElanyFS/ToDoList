import { FormEvent, useState } from "react";
import { Button } from "./Button";

interface formProps {
  text: string;
  dados: (title: string, description: string, dueDate: string) => void;
}
export const Form = ({ text, dados }: formProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(""); 

  const addFormTaskSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      alert("Preencha todos os campos");
      return;
    }

    dados(title, description, dueDate);

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={addFormTaskSubmit}
      className="w-full flex flex-col items-center gap-3"
    >
      <h1 className="text-xl font-bold text-[#fdab96]">{text}</h1>
      <div className="flex items-center gap-2 w-full bg-zinc-50 text-zinc-800 py-3 px-2 rounded-xl">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Tarefa..."
          className="text-zinc-400 flex-1 bg-transparent text-lg outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 w-full bg-zinc-50 text-zinc-800 py-3 px-2 rounded-xl">
        <textarea
          name="description"
          placeholder="Descrição..."
          value={description}
          className="text-zinc-400 flex-1 bg-transparent text-lg outline-none"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="flex items-center gap-2 w-full bg-zinc-50 text-zinc-800 py-3 px-2 rounded-xl">
        <input
        type="date"
          name="dueDate"
          placeholder="..."
          value={dueDate}
          className="text-zinc-400 flex-1 bg-transparent text-lg outline-none"
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <Button variant="primary" size="padding" typeof="submit">
        Confirmar
      </Button>
    </form>
  );
};
