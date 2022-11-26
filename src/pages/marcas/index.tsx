import { Brand } from "@prisma/client";
import { useState } from "react";
import Botao from "../../components/button/Botao";
import Formulario from "../../components/forms/Formulario";
import Layout from "../../components/Layout";
import TableBrand from "../../components/marca/TabelaMarcas";
import prisma from "../../lib/prisma";

interface BrandProps {
  marca: Brand[];
}

export default function Home({ marca }: BrandProps) {
  const marcas = marca;
  const [marcaCadastrada, setMarcaCadastrada] = useState<Brand>();
  const [visible, setVisible] = useState<"tabela" | "form">("tabela");

  function marcaSelecionada(marca: Brand) {
    setMarcaCadastrada(marcaCadastrada);
    console.log(`alterar...${marca.name}`);
  }

  function marcaExcluida(marca: Brand) {
    console.log(`Excluir...${marca.name}`);
  }
  function salvar(marca: Brand) {
    console.log(marca);
    setVisible("tabela");
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center bg-blue-900">
        <Layout titulo="Cadastro de Marcas">
          {visible === "tabela" ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" onClick={() => setVisible("form")}>
                  Cadastrar
                </Botao>
              </div>

              <TableBrand
                marcas={marcas}
                marcaSelecionada={marcaSelecionada}
                marcaExcluida={marcaExcluida}
              />
            </>
          ) : (
            <Formulario
              marca={marca[1]}
              mudouNome={salvar}
              cancelado={() => setVisible("tabela")}
            />
          )}
        </Layout>
      </div>
    </>
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
