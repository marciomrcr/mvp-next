import { Brand } from "@prisma/client";
import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import prisma from "../lib/prisma";

interface BrandProps {
  marca: Brand[];
}

export default function Home({ marca }: BrandProps) {
  const marcas = marca;
  const [visible, setVisible] = useState<"tabela" | "form">("tabela");

  function marcaSelecionada(marca: Brand) {
    console.log(marca.name);
  }
  function marcaExcluida(marca: Brand) {
    console.log(`Excluir...${marca.name}`);
  }
  function salvar(marca: Brand) {
    console.log(marca);
  }

  return (
    <div>
      <div className="flex ">
        <SideBar />
        <div>
          <Header />
          <div className="container h-8 mx-auto p-5">
            <div className="md:flex md:flex-row md:justify-between text-center">
              <Container />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const marca = await prisma.brand.findMany();
  return {
    props: {
      marca: JSON.parse(JSON.stringify(marca)),
    },
  };
};
