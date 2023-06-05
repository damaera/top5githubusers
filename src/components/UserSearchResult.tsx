import { useState } from "react";
import { UserRepos } from "./UserRepos";
import { useUserSearchStore } from "./searchStore";

const SearchUserItem: React.FC<{ login: string }> = ({ login }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="border rounded user-result-item">
      <div
        className="flex px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors"
        onClick={() => {
          setExpanded((isExpanded) => !isExpanded);
        }}
      >
        <div className="flex-1 font-medium">{login}</div>
        <div>{isExpanded ? "🔼" : "🔽"}</div>
      </div>
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

  return (
    <>
      <div className="user-result-text text-slate-600 text-sm font-medium">
        {data && data?.length === 0
          ? "Your search did not match any users"
          : `Showing Users for "${text}"`}
      </div>
      <div className="flex flex-col gap-2 user-result-wrapper">
        {isLoading
          ? [0, 1, 2, 3, 4].map((key) => (
              <div key={key} className="bg-slate-100 animate-pulse">
                <div className="rounded w-full h-10"></div>
              </div>
            ))
          : data && data?.length > 0
          ? data?.map((user) => (
              <SearchUserItem key={user.login} login={user.login} />
            ))
          : null}
      </div>
    </>
  );
};
