import { octokit } from "@/lib/octokit";

export type SearchUsersResult = {
  login: string;
}[];

export const searchTop5Users: (args: {
  q: string;
  page: number;
}) => Promise<SearchUsersResult> = async ({ q, page }) => {
  const result = await octokit.rest.search.users({ q, page, per_page: 5 });

  return result.data.items.map((user) => ({
    login: user.login,
  }));
};

export type ListReposResult = {
  name: string;
  description: string;
  stargazerCount: number;
  fullName: string;
}[];

export const listReposFromUser: (args: {
  username: string;
  page: number;
}) => Promise<ListReposResult> = async ({ username, page }) => {
  const result = await octokit.rest.repos.listForUser({
    username,
    sort: "updated",
    direction: "desc",
    per_page: 5,
    page,
  });

  return result.data.map((repo) => ({
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description ?? "",
    stargazerCount: repo.stargazers_count ?? 0,
  }));
};
