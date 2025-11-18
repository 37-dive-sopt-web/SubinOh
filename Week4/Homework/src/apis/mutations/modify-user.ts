import { mutationOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { UserReq, UserRes } from "../../types/user";
import { getUserId } from "../../utils/auth-storage";
import type { ApiResponse } from "./../../types/common";

export const modifyMutationOptions = {
  modify: mutationOptions({
    mutationKey: ["modify"],
    mutationFn: async (data: UserReq) => {
      await apiClient.patch<ApiResponse<UserRes>>(
        ENDPOINTS.MODIFY_USER_INFO(getUserId()),
        {
          json: data,
        }
      );
    },
  }),
};
