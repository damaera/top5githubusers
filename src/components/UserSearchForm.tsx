export const UserSearchForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <input
        className="px-4 py-2 rounded border-2 border-slate-400 w-full"
        placeholder="Enter username"
      ></input>
      <button className="px-4 py-2 rounded bg-blue-600 w-full text-blue-100 font-semibold">
        Search 🔎
      </button>
    </form>
  );
};
