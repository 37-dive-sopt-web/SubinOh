import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { SignUpReq } from "../../types/signup";

export const signupMutationOptions = {
  signup: mutationOptions({
    mutationKey: ["signup"],
    mutationFn: async (data: SignUpReq) => {
      await apiClient.post(ENDPOINTS.USER_SIGNUP, {
        json: data,
      });
    },
  }),
};
