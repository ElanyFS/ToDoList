import React from 'react'

interface searchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
  }

export const SearchTask:React.FC<searchProps> = ({search, setSearch}) => {
  return (
    <div className="flex items-center w-full border-2 rounded-lg p-2 border-[#628280]">
      <input
      placeholder="Pesquisar tarefa"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-zinc-700 text-zinc-400 bg-transparent flex-1 outline-none"
      />
    </div>
  )
}
