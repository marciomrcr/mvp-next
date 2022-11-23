import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json("get categorias id");

    case "PUT":
      return res.status(200).json("update categorias id");

    case "DELETE":
      return res.status(200).json("delete categorias id");

    default:
      return res.status(200).json("Method invalid");
  }
};
