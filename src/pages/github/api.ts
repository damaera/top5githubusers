import { octokit } from "@/pages/lib/octokit";

export type SearchUsersResult = {
  name: string;
}[];

export const searchTop5Users: (
  q: string
) => Promise<SearchUsersResult> = async (q) => {
  const result = await octokit.rest.search.users({ q, per_page: 5 });

  return result.data.items.map((user) => ({
    name: user.name ?? "",
  }));
};

export type ListReposResult = {
  stargazer_count: number;
  name: string;
  description: string;
}[];

export const listReposFromUser: (
  username: string,
  page: number
) => Promise<any> = async (username) => {
  const result = await octokit.rest.repos.listForUser({
    username,
    sort: "updated",
    direction: "desc",
    per_page: 5,
  });

  return result.data.map((repo) => ({
    stargazer_count: repo.stargazers_count,
    name: repo.name,
    description: repo.description,
  }));
};
