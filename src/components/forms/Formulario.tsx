import { Brand } from "@prisma/client";
import { useState } from "react";
import Botao from "../button/Botao";
import Entrada from "./Entrada";

interface FormProps {
  brand: Brand;
}

export default function Formulario(props: FormProps) {
  const id = props.brand?.id;
  const [nome, setNome] = useState(
    props.brand?.name ?? "Sem dados para exibir!"
  );
  const [descricao, setDescricao] = useState(
    props.brand?.description ?? "Sem dados para exibir!"
  );
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Código" valor={id} /> : false}
      <Entrada texto="Marca" valor={nome} mudaValor={setNome} />
      <Entrada texto="Descrição" valor={descricao} mudaValor={setDescricao} />

      <div className="flex justify-end mt-7">
        <Botao className="bg-blue-600 mr-2">{id ? "Alterar" : "Salvar"}</Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
}
