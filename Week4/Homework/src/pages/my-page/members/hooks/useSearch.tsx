import { useCallback, useState } from "react";
import { userQueryOptions } from "../../../../apis/queries/user";
import { useQuery } from "@tanstack/react-query";
import type { User } from "../../../../types/user";

export function useSearch() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const {
    refetch,
    isError,
    error: queryError,
  } = useQuery({
    ...userQueryOptions.getUser(userId ?? 0),
    enabled: false,
    retry: 0,
  });

  const handleUserId = useCallback((id: number) => {
    setUserId(id);
  }, []);

  const handleSearch = async () => {
    if (userId) {
      const result = await refetch();
      if (result?.data) {
        setUserInfo(result.data.data);
      } else {
        setUserInfo(null);
      }
    }
  };
  return {
    userId,
    handleUserId,
    handleSearch,
    userInfo,
    isError,
    error: queryError ? queryError.message : "",
  };
}
