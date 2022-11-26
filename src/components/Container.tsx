import Card from "./Card";
// import Middle from "./Middle";
import RightBar from "./RightBar";

const Container = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full ">
      <div className="  px-8 py-1 ">
        <p className="text-gray-500 text-lg">Aliane</p>
        <p className="font-bold text-xl transform -translate-y-2">
          Veja como está a sua loja hoje!
        </p>
      </div>
      <div className="flex font-bold p-4  space-x-3">
        <Card title="SALDO" balance={409.079} icon={0} />
        <Card title="VENDAS" balance={300.079} icon={1} />
        <Card title="ENTRADAS" balance={100.079} icon={2} />
        <Card title="DESPESAS" balance={339.079} icon={3} />
      </div>
      <div className="flex  ml-3 mt-6 space-x-6  mr-4">
        {/* <Middle /> */}
        <RightBar title="Quantidade de vendas" total={62} />
        <RightBar title="Total de clientes" total={62} />
        <RightBar title="Total de Produtos em estoque R$" total={635.0} />
      </div>
    </div>
  );
};

export default Container;
