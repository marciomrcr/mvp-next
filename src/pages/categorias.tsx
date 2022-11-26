import type { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import prisma from "../lib/prisma";

interface FormData {
  name: string;
  description: string;
  id: string;
}
interface Categorias {
  categorias: {
    name: string;
    description: string;
    id: string;
  }[];
}

const router = Router;

const TelaCadCategoria = ({ categorias }: Categorias) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    description: "",
    id: "",
  });

  const [nome, setNome] = useState<Categorias>();

  //Refresh da página após create/update/delete
  const router = useRouter();

  const refreshPage = () => {
    router.replace(router.asPath);
  };

  async function create(data: FormData) {
    try {
      fetch("/api/categorias/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({ name: "", description: "", id: "" });
        refreshPage();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCategory(id: string) {
    try {
      fetch(`http://localhost:3000/api/categorias/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshPage();
      });
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
    <>
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
        <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
          <ul>
            {categorias.map((categoria, index) => (
              <li key={index} className="border-b border-gray-600 p-2">
                <div className="flex justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold  p-1">{categoria.name}</h3>
                    <p className=" p-1">{categoria.description}</p>
                  </div>
                  <button
                    onClick={() => deleteCategory(categoria.id)}
                    className="bg-red-500 text-center font-bold text-xl text-white rounded p-1 mt-2 mr-2"
                  >
                    Apagar
                  </button>

                  <button
                    onClick={() =>
                      setNome({
                        categorias,
                      })
                    }
                    className="bg-blue-500 text-center font-bold text-xl text-white rounded p-1 mt-2"
                  >
                    Alterar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TelaCadCategoria;

export const getServerSideProps: GetServerSideProps = async () => {
  const categorias = await prisma.category.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return {
    props: {
      categorias,
    },
  };
};
