import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "../api-client";
import { ENDPOINTS } from "../../constants/endpoints";
import type { UserRes } from "../../types/user";
import type { ApiResponse } from "../../types/common";

export const userQueryKeys = {
  all: () => ["user"],
  detail: (id: number) => [...userQueryKeys.all(), id],
} as const;

export const userQueryOptions = {
  getUser: (id: number) =>
    queryOptions({
      queryKey: userQueryKeys.detail(id),
      queryFn: () => getUserInfo(id),
    }),
};

const getUserInfo = async (id: number): Promise<ApiResponse<UserRes>> => {
  const result = await apiClient.get<ApiResponse<UserRes>>(
    ENDPOINTS.SEARCH_USER(id)
  );
  return result;
};
