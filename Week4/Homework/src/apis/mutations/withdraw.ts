import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";

export const withdrawMutationOptions = {
  withdraw: mutationOptions({
    mutationKey: ["withdraw"],
    mutationFn: async (id: number) => {
      await apiClient.delete(ENDPOINTS.WITHDRAW_USER(id));
    },
  }),
};
