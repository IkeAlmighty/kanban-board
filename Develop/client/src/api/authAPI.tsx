import { UserLogin } from "../interfaces/UserLogin";

interface AuthTokenData {
  token: string;
}

const login = async (userInfo: UserLogin): Promise<AuthTokenData> => {
  // make a POST request to the login route
  const { username, password } = userInfo;
  const body = JSON.stringify({ username, password })

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body,
  });

  if (response.ok) {
    // return the token
    const { authToken } = await response.json();
    return { token: authToken };
  } else if (response.status !== 500) {
    const { error } = await response.json();
    throw new Error(error);
  } else throw new Error('Internal Server Error')
};

export { login };
