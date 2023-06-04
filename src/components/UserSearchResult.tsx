export const UserSearchResult = () => {
  return (
    <>
      <div className="text-slate-600 text-sm font-medium">
        Showing Users for "ExampleUser"
      </div>
      <div className="flex flex-col gap-2">
        <div className="border rounded px-4 py-2">
          <div className="flex">
            <div className="flex-1 font-medium">ExampleUser1</div>
            <div>🔽</div>
          </div>
          <div className="h-2" />
          <div className="text-sm border-t py-2 pl-2">
            <div className="flex font-medium">
              <div className="flex-1">Repository title</div>
              <div className="">12 ⭐️</div>
            </div>
            <div className="text-slate-600">Repository description</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
