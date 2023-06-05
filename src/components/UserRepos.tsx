import { ListReposResult } from "@/github/api";
import { shortNumberFormat } from "@/lib/utils";
import useSWR from "swr";

const useUserReposSWR = (key: string) =>
  useSWR<ListReposResult>(`/api/listReposFromUser?username=${key}`, (key) =>
    fetch(key).then((res) => res.json())
  );

export const UserRepos: React.FC<{ username: string }> = ({ username }) => {
  const userReposSWR = useUserReposSWR(username);

  return (
    <div>
      {userReposSWR.isLoading
        ? [0, 1, 2, 3, 4].map((key) => (
            <div
              key={key}
              className="w-full h-16 animate-pulse bg-slate-50 border-t py-2 px-4"
            >
              <div
                className="h-5 bg-slate-200 rounded-full"
                style={{ width: 120 }}
              />
              <div className="h-1" />
              <div className="h-5 bg-slate-200 w-full rounded-full" />
            </div>
          ))
        : null}
      {userReposSWR.data?.length === 0 ? (
        <div className="p-4">User don't have any repository</div>
      ) : (
        userReposSWR.data?.map((repo) => (
          <a
            key={repo.fullName}
            href={`https://github.com/${repo.fullName}`}
            target="_blank"
          >
            <div className="text-sm border-t py-2 px-4 bg-slate-50 hover:bg-blue-100 transition-colors">
              <div className="flex font-medium">
                <div className="flex-1">{repo.name}</div>
                <div className="font-bold text-sm">
                  {shortNumberFormat(repo.stargazerCount)} ⭐️
                </div>
              </div>
              <div className="h-1" />
              <div className="pr-4 text-slate-600">{repo.description}</div>
              <div></div>
            </div>
          </a>
        ))
      )}
    </div>
  );
};
