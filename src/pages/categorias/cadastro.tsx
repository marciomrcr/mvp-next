import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";

interface FormData {
  name: string;
  description: string;
  id: string;
}

const alterar = async function (id: string): Promise<void> {
  await fetch(`/api/marcas/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
  return;
};

const TelaCadCategoria: NextPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    description: "",
    id: "",
  });

  async function create(data: FormData) {
    try {
      fetch("/api/categorias/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() =>
        setForm({
          name: "",
          description: "",
          id: "",
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className=" text-center font-bold text-2xl mt-4">Categoria</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          placeholder="Categoria"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className=" border-2 rounded border-gray-600 p-1"
        />
        <textarea
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className=" border-2 rounded border-gray-600 p-1"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-1">
          Salvar
        </button>
      </form>
      <div></div>
    </div>
  );
};
export default TelaCadCategoria;
