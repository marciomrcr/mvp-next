interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  mudaValor?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-4">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.mudaValor?.(e.target.value)}
        className={`border border-blue-900 rounded-md
        focus:outline-none bg-gray-100 px-4 py-2
${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
