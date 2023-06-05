import { FormEventHandler, useEffect, useState } from "react";
import { useUserSearchStore } from "./searchStore";
import { debounce } from "@/lib/utils";

export const UserSearchForm = () => {
  const { text, setText, fetchSearchUser } = useUserSearchStore((state) => ({
    text: state.text,
    setText: state.setText,
    fetchSearchUser: state.fetch,
  }));

  const onSubmitSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (text) {
      console.log(123123);
      fetchSearchUser(text);
    }
  }, [text]);

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmitSearch}>
      <input
        className="px-4 py-2 rounded border-2 border-slate-400 w-full"
        placeholder="Enter username"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="px-4 py-2 rounded bg-blue-600 w-full text-blue-100 font-semibold">
        Search 🔎
      </button>
    </form>
  );
};
