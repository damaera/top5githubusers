import { ListReposResult } from "@/github/api";
import useSWR from "swr";

const useUserReposSWR = (key: string) =>
  useSWR<ListReposResult>(`/api/listReposFromUser?username=${key}`, (key) =>
    fetch(key).then((res) => res.json())
  );

export const UserRepos: React.FC<{ username: string }> = ({ username }) => {
  const userReposSWR = useUserReposSWR(username);

  return (
    <div>
      {userReposSWR.data?.map((repo) => (
        <div key={repo.fullName} className="text-sm border-t py-2 pl-2">
          <div className="flex font-medium">
            <div className="flex-1">{repo.name}</div>
            <div className="font-bold">{repo.stargazerCount}⭐️</div>
          </div>
          <div className="text-slate-600">{repo.description}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
};
