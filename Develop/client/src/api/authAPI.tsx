import { UserLogin } from "../interfaces/UserLogin";

interface AuthTokenData {
  token: string;
}

const login = async (userInfo: UserLogin): Promise<AuthTokenData> => {
  // make a POST request to the login route
  const { username, password } = userInfo;

  const response = await fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    // return the token
    const { authToken } = await response.json();
    return { token: authToken };
  } else {
    const { error } = await response.json();
    throw new Error(error);
  }
};

export { login };
