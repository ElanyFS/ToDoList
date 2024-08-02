import React from "react";
import { Button } from "./Button";

interface filterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterTask: React.FC<filterProps> = ({
  filter,
  setFilter,
  setOrder,
}) => {
  return (
    <div className="filter flex justify-between items-start px-4 gap-4">
      <div className="filter_select">
        <h4 className="font-semibold">Selecionar: </h4>
        <ul className="flex flex-col md:flex-row md:items-center items-start md:gap-4 gap-2">
          <li className="flex justify-center items-center gap-2">
            <input
              type="radio"
              id="open"
              name="filter"
              value="open"
              checked={filter === "open"}
              onChange={(e) => setFilter(e.target.value)}
            />
            <span>Abertas</span>
          </li>

          <li className="flex justify-center items-center gap-2">
            <input
              type="radio"
              id="completed"
              name="filter"
              value="completed"
              checked={filter === "completed"}
              onChange={(e) => setFilter(e.target.value)}
            />
            <span>Completas</span>
          </li>

          <li className="flex justify-center items-center gap-2">
            <input
              type="radio"
              id="all"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={(e) => setFilter(e.target.value)}
            />
            <span>Todas</span>
          </li>
        </ul>
      </div>

      <div className="filter_order space-y-2">
        <h4 className="font-semibold">Ordem alfabética: </h4>
        <div className="btn_order flex justify-around gap-2">
          <Button variant="third" onClick={() => setOrder("Asc")}>
            Asc
          </Button>

          <Button variant="third" onClick={() => setOrder("Desc")}>
            Desc
          </Button>
        </div>
      </div>
    </div>
  );
};
