import { use } from "react";
import prisma from "../../../lib/prisma";

async function getMarca(marcaId: string) {
  const res = await prisma.brand.findUnique({
    where: {
      id: marcaId,
    },
  });

  return res;
}

export function Page(id: string) {
  const marca = use(getMarca(id));
  console.log(marca);
  return (
    <div>
      <hr></hr>
      <h1>{marca?.name}</h1>
      <h1>{marca?.description}</h1>
    </div>
  );
}

export default Page;
