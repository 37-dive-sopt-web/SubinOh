import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { UpdateUserReq, UpdateUserRes } from "../../types/user";
import { getUserId } from "../../utils/auth-storage";

export const modifyMutationOptions = {
  modify: mutationOptions({
    mutationKey: ["modify"],
    mutationFn: async (data: UpdateUserReq) => {
      await apiClient.patch<UpdateUserRes>(
        ENDPOINTS.MODIFY_USER_INFO(getUserId()),
        {
          json: data,
        }
      );
    },
  }),
};
