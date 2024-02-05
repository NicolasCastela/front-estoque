//User Service  -  Service to manage users
interface User {
  name: string;
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
export { User, getUsers };
