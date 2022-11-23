import { Brand } from "@prisma/client";
import TableBrand from "../components/brand/TableBrand";
import Header from "../components/Header";
import Layout from "../components/Layout";
import prisma from "../lib/prisma";

interface BrandProps {
  brand: Brand[];
}

export default function Home({ brand }: BrandProps) {
  const brands = brand;

  function brandSelecionada(brand: Brand) {
    console.log(brand.name);
  }
  function brandExcluida(brand: Brand) {
    console.log(`Excluir...${brand.name}`);
  }
  return (
    <>
      <Header />
      <div className="flex h-screen justify-center items-center bg-blue-900">
        <Layout titulo="Cadastro">
          <TableBrand
            brands={brands}
            brandSelecionada={brandSelecionada}
            brandExcluida={brandExcluida}
          ></TableBrand>
        </Layout>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const brand = await prisma.brand.findMany();
  return {
    props: {
      brand: JSON.parse(JSON.stringify(brand)),
    },
  };
};
