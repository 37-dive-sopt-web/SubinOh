import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { LoginReq, LoginRes } from "../../types/login";
import type { ApiResponse } from "./../../types/common";

export const loginMutationOptions = {
  login: mutationOptions({
    mutationKey: ["login"],
    mutationFn: async (data: LoginReq): Promise<ApiResponse<LoginRes>> => {
      const result = await apiClient.post<ApiResponse<LoginRes>>(
        ENDPOINTS.USER_LOGIN,
        {
          json: data,
        }
      );
      return result;
    },
  }),
};
