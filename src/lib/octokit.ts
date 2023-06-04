import { Octokit } from "octokit";
import { CONST } from "./const";

export const octokit = new Octokit({ auth: CONST.server.githubToken });
