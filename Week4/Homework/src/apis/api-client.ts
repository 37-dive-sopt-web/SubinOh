import ky, { type Options, type ResponsePromise } from "ky";

const http = ky.create({
  prefixUrl: `${import.meta.env.VITE_API_KEY}`,
  credentials: "include",
  timeout: 10000,
  retry: 0,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeError: [
      async (error) => {
        const { response } = error;
        if (response) {
          const message = await response.text();
          error = JSON.parse(message);
        }
        console.log("부모 에러다: ", error);
        return error;
      },
    ],
  },
});

async function parseResponse<T>(res: ResponsePromise): Promise<T> {
  return await res.json<T>();
}

export const apiClient = {
  get: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(http.get(pathname, options)),
  post: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(http.post(pathname, options)),
  patch: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(http.patch(pathname, options)),
  delete: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(http.delete(pathname, options)),
};
