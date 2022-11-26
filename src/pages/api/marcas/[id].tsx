import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  marcaId: any
) {
  marcaId = req.query.id;

  if (req.method === "DELETE") {
    handleDelete(marcaId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// DELETE /api/post/:id
async function handleDelete(marcaId: string, res: NextApiResponse) {
  const post = await prisma.brand.delete({
    where: { id: marcaId },
  });
  res.json(post);
}
