import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const id: string = ''
  const id: any = req.query.id;

  const marca = await prisma.brand.update({
    where: {
      id,
    },
    data: {
      name: req.query,
      description: req.query,
    },
  });
  res.json(marca);
}
