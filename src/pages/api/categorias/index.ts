import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json("get categoria");

    case "POST":
      return res.status(201).json("create categoria");

    default:
      return res.status(400).json("Method invalid");
  }
};
