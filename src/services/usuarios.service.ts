/**
 * User Service - Service to manage user
 */
/**
 * User Service - Service to manage user
 */
interface User {
  name: string;
  email: string;
  password: string;
  token: string;
}

/**
 * Login response interface
 */
interface LoginResponse {
  name: string;
  email: string;
  password: string;
  token: string;
}

/**
 * Get all users
 * @returns Promise<User[]> - A promise that resolves to an array of User objects
 */
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

/**
 * Login user
 * @param email - The user's email
 * @param password - The user's password
 * @returns Promise<LoginResponse> - A promise that resolves to a LoginResponse object
 */
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
