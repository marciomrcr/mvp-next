import { Brand } from "@prisma/client";
import { IconDelete, IconEdit } from "../Icones";

interface BrandTabelaProps {
  brands: Brand[];
  brandSelecionada?: (brand: Brand) => void;
  brandExcluida?: (brand: Brand) => void;
}
export default function TableBrand(props: BrandTabelaProps) {
  const exibirAcoes = props.brandSelecionada || props.brandExcluida;
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
    return props.brands?.map((b, i) => {
      return (
        <tr
          key={b.id}
          className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
        >
          <td className=" text-left p-4">{b.name}</td>
          <td className=" text-left p-4">{b.description}</td>
          <td className=" text-left p-4">{b.manufacturer}</td>
          {exibirAcoes ? renderizarAcoes(b) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(b: Brand) {
    return (
      <td className="flex justify-center">
        {props.brandSelecionada ? (
          <button
            onClick={() => props.brandSelecionada?.(b)}
            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-blue-50"
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {props.brandExcluida ? (
          <button
            onClick={() => props.brandExcluida?.(b)}
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
