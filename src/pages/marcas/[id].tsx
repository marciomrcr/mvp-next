export default function () {
  return <div>oi</div>;
}

// import { GetServerSideProps } from "next";
// import Router from "next/router";
// import { useState } from "react";
// import Botao from "../../components/button/Botao";
// import Formulario from "../../components/forms/Formulario";
// import Header from "../../components/Header";
// import Layout from "../../components/Layout";
// import { MarcaProps } from "../../components/marca/Marca";
// import TableBrand from "../../components/marca/TabelaMarcas";
// import prisma from "../../lib/prisma";
// import { makeSerializable } from "../../lib/util/makeSerializable";

// async function alterar(id: string): Promise<void> {
//   await fetch("/api/alterar/${id}", {
//     method: "PUT",
//   });
//   await Router.push("/");
// }
// async function destroy(id: string): Promise<void> {
//   await fetch("/api/marcas/${id}", {
//     method: "DELETE",
//   });
//   await Router.push("/");
// }

// const marca: React.FC<MarcaProps> = (props) => {
//   let nome = props.name;
//   let descricao = props.description;
//   let fabricante = props.manufacturer;
//   if (!props.name) {
//     nome = `${nome}`;
//   }
//   if (!props.description) {
//     nome = `${descricao}`;
//   }
//   if (!props.manufacturer) {
//     nome = `${fabricante}`;
//   }
//   function marcaSelecionada(marcas: MarcaProps) {
//     console.log(marcas.name);
//   }
//   function marcaExcluida(marcas: MarcaProps) {
//     console.log(`Excluir...${marcas.name}`);
//   }
//   const [visible, setVisible] = useState<"tabela" | "form">("tabela");
//   function salvar(marcas: MarcaProps) {
//     console.log(marcas);
//   }
//   return (
//     <>
//       <Header />
//       <div className="flex h-screen justify-center items-center bg-blue-900">
//         <Layout titulo="Cadastro de Marcas">
//           {visible === "tabela" ? (
//             <>
//               <div className="flex justify-end">
//                 <Botao className="mb-4" onClick={() => setVisible("form")}>
//                   Cadastrar
//                 </Botao>
//               </div>

//               <TableBrand
//                 marcas={marcas}
//                 brandSelecionada={marcaSelecionada}
//                 brandExcluida={marcaExcluida}
//               />
//             </>
//           ) : (
//             <Formulario
//               marcas={marca}
//               mudouNome={salvar}
//               cancelado={() => setVisible("tabela")}
//             />
//           )}
//         </Layout>
//       </div>
//     </>
//   );
// }

// };

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   const id = String(
//     Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id
//   );
//   const marca = await prisma.brand.findUnique({
//     where: {
//       id,
//     },
//   });
//   return {
//     props: { ...makeSerializable(marca) },
//   };
// };

// export default Marca;
