// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SearchUsersResult, searchTop5Users } from "../github/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchUsersResult | { message: "error" }>
) {
  const q = typeof req.query.q === "string" ? req.query.q : "";
  // const page = typeof req.query.page === "number" ? req.query.page : 1;

  try {
    const data = await searchTop5Users(q);

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "error" });
  }
}
