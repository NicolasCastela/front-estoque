interface Produtos {
  nome: string;
  quantidade: number;
  valor: number;
  marca: string;
  categoria: string;
  cod_prod: number;
  autor: string;
}

async function fetchConsumirApi(): Promise<Produtos[]> {
  try {
    const res = await fetch("http://localhost:3000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Erro ao buscar Produtos na requisição API");
    } else {
      const req = await res.json();
      return req;
    }
  } catch (error) {
    console.error("Erro de rede ao consumir produto", error);
    return [];
  }
}

export { fetchConsumirApi, Produtos };
