import { Brand } from "@prisma/client";
import Router from "next/router";
import { useState } from "react";
import Botao from "../button/Botao";
import Entrada from "./Entrada";

interface FormProps {
  marca: Brand;
  mudouNome?: (marca: Brand) => void;
  cancelado?: () => void;
}

interface FormData {
  name: string;
  description: string;
  id: string;
}

interface marcas {
  marcas: {
    name: string;
    description: string;
    id: string;
  }[];
}

const deletar = async function (id: string): Promise<void> {
  await fetch(`/api/marcas/${id}`, {
    method: "DELETE",
  });
  await Router.push("/api/marcas/");
  return;
};

export default function Formulario(props: FormProps) {
  const id = props.marca?.id;
  const [nome, setNome] = useState(
    props.marca?.name ?? "Sem dados para exibir!"
  );

  const [form, setForm] = useState<FormData>({
    name: "",
    description: "",
    id: "",
  });
  const [descricao, setDescricao] = useState(
    props.marca?.description ?? "Sem dados para exibir!"
  );
  return (
    <div>
      <Entrada texto="Marca" valor={nome} mudouValor={setNome} />
      <Entrada texto="Descrição" valor={descricao} mudouValor={setDescricao} />

      <div className="flex justify-end mt-7">
        <Botao
          className="bg-blue-600 mr-2"
          onClick={() => setForm(nome, descricao)}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}

// const getServerSideProps = async () => {
//   const marca = await prisma.brand.findMany();
//   return {
//     props: {
//       marca: JSON.parse(JSON.stringify(marca)),
//     },
//   };
// };
