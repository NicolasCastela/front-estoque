//User Service  -  Service to manage users
interface User {
  name: string;
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  password: string;
}

async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Email ou senha incorreta, tente novamente.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (
      (error as Error).message === "Erro ao fazer login, credenciais invalidas."
    ) {
      throw new Error(" Erro ao fazer login, credenciais invalidas.");
    }
    throw error;
  }
}

export { User, getUsers, loginUser, LoginResponse };
