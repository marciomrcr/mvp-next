import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { brandId } = req.query;
        const brand = async function handleGet(
          brandId: string,
          res: NextApiResponse
        ) {
          const getMarcas = await prisma.brand.findUnique({
            where: {
              id: brandId,
            },
          });
          return res.status(200).json(getMarcas);
        };
      } catch (error) {
        return res.send({ message: error });
      }

    case "PUT":
      return res.status(200).json("update marcas id");

    case "DELETE":
      return res.status(200).json("delete marcas id");

    default:
      return res.status(200).json("Method invalid");
  }
};
