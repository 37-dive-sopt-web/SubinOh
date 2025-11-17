import { useCallback, useState } from "react";
import { userQueryOptions } from "../../../../apis/queries/user";
import { useQuery } from "@tanstack/react-query";
import type { UserInfo } from "../../../../types/user";

export function useSearch() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const { refetch, isError } = useQuery({
    ...userQueryOptions.getUser(userId ?? 0),
    enabled: false,
    retry: 0,
  });
  const [error, setError] = useState("");

  const handleUserId = useCallback((id: number) => {
    setUserId(id);
  }, []);

  const handleSearch = async () => {
    if (userId) {
      const result = await refetch();
      setUserInfo(result.data);
      if (result.error) {
        setError(result.error.message);
      }
    }
  };

  return { userId, handleUserId, handleSearch, userInfo, isError, error };
}
