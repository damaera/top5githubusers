// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ListReposResult, listReposFromUser } from "@/github/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListReposResult | { message: "error" }>
) {
  try {
    const username =
      typeof req.query.username === "string" ? req.query.username : "";
    const page =
      typeof req.query.page === "string" ? Number(req.query.page) : 1;

    const data = await listReposFromUser({ username, page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: (err as any)?.message ?? "error" });
  }
}
