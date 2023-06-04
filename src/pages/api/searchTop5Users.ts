// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SearchUsersResult, searchTop5Users } from "@/github/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchUsersResult | { message: "error" }>
) {
  try {
    const q = typeof req.query.q === "string" ? req.query.q : "";
    const page =
      typeof req.query.page === "string" ? Number(req.query.page) : 1;

    const data = await searchTop5Users({ q, page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: (err as any)?.message ?? "error" });
  }
}
