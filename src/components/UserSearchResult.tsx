import { useState } from "react";
import { UserRepos } from "./UserRepos";
import { useUserSearchStore } from "./searchStore";

const SearchUserItem: React.FC<{ login: string }> = ({ login }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="border rounded px-4 py-2">
      <div
        className="flex"
        onClick={() => {
          setExpanded((isExpanded) => !isExpanded);
        }}
      >
        <div className="flex-1 font-medium">{login}</div>
        <div>{isExpanded ? "🔼" : "🔽"}</div>
      </div>
      <div className="h-2" />
      {isExpanded && <UserRepos username={login} />}
    </div>
  );
};

export const UserSearchResult = () => {
  const { text, data, isLoading } = useUserSearchStore((state) => ({
    text: state.text,
    data: state.data,
    isLoading: state.isLoading,
  }));

  if (!text) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-slate-600 text-sm font-medium">
        Showing Users for "{text}"
      </div>
      <div className="flex flex-col gap-2">
        {data?.map((user) => (
          <SearchUserItem key={user.login} login={user.login} />
        ))}
      </div>
    </>
  );
};
