import prisma from "../../../lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  resp: NextApiResponse
) {
  const { name, description } = req.body;

  try {
    await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    resp.status(201).json({ Mensagem: "Categoria não foi salva" });
  } catch (error) {
    console.log("Falha");
  }
}
