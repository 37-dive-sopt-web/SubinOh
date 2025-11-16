import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { LoginReq, LoginRes } from "../../types/login";

export const loginMutationOptions = {
  login: mutationOptions({
    mutationKey: ["login"],
    mutationFn: async (data: LoginReq) => {
      const result = await apiClient.post<LoginRes>(ENDPOINTS.USER_LOGIN, {
        json: data,
      });
      return result;
    },
  }),
};
