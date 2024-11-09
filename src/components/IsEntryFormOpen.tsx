import { AiFillCloseCircle } from "react-icons/ai";
import { Form } from "./Form";
import { Button } from "./Button";

interface isEntryFormOpenProps {
  text: string;
  btnOpenClose: () => void;
  dados: (title: string, description: string, dueDate: string) => void;
}

export const IsEntryFormOpen = ({
  text,
  btnOpenClose,
  dados,
}: isEntryFormOpenProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-3 z-20">
      <div className="w-[664px] bg-zinc-200 rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="flex items-center justify-end">
          <Button variant="secondary" size="padding" onClick={btnOpenClose}>
            <AiFillCloseCircle className="size-5 " />
          </Button>
        </div>
        <Form text={text} dados={dados} />
      </div>
    </div>
  );
};
