import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  categoriaId: any
) {
  categoriaId = req.query.id;

  if (req.method === "DELETE") {
    handleDELETE(categoriaId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// DELETE /api/post/:id
async function handleDELETE(categoriaId: string, res: NextApiResponse) {
  const post = await prisma.brand.delete({
    where: { id: categoriaId },
  });
  res.json(post);
}
