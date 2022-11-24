import { Brand } from "@prisma/client";
import { IconDelete, IconEdit } from "../Icones";

interface MarcaTabelaProps {
  marcas: Brand[];
  marcaSelecionada?: (marca: Brand) => void;
  marcaExcluida?: (marca: Brand) => void;
}
export default function TabelaMarcas(props: MarcaTabelaProps) {
  const exibirAcoes = props.marcaSelecionada || props.marcaExcluida;
  function renderizarCabecalho() {
    return (
      <tr>
        <th className=" text-left p-4">Nome</th>
        <th className=" text-left p-4">Descrição</th>
        <th className=" text-left p-4">Fabricante</th>
        {exibirAcoes ? <th className=" p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.marcas?.map((marca, i) => {
      return (
        <tr
          key={marca.id}
          className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
        >
          <td className=" text-left p-4">{marca.name}</td>
          <td className=" text-left p-4">{marca.description}</td>
          <td className=" text-left p-4">{marca.manufacturer}</td>
          {exibirAcoes ? renderizarAcoes(marca) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(marca: Brand) {
    return (
      <td className="flex justify-center">
        {props.marcaSelecionada ? (
          <button
            onClick={() => props.marcaSelecionada?.(marca)}
            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-blue-50"
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.marcaExcluida ? (
          <button
            onClick={() => props.marcaExcluida?.(marca)}
            className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-blue-50"
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-blue-900 to-black">
        {renderizarCabecalho()}
      </thead>

      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
