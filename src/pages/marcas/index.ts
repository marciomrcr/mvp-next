import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const getMarcas = await prisma.brand.findMany({
          select: {
            name: true,
            description: true,
            id: true,
          },
          orderBy: {
            name: "asc",
          },
        });
        return res.status(200).json(getMarcas);
      } catch (error) {
        return res.send({ message: error });
      }

    case "POST":
      try {
        const { name, description } = req.body;
        const createBrand = await prisma.brand.create({
          data: {
            name,
            description,
          },
        });
        return res.status(201).json(createBrand);
      } catch (error) {
        return res.send({ message: error });
      }

    default:
      return res.status(200).json("Method invalid");
  }
};
