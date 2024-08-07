import { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { _Post, _UserData } from "../@types";
import { getRepoIssues, getUserInfo } from "../services/api";

interface GithubContextProps {
  userData: _UserData | null;
  fetchIssues: (query?: string) => Promise<_Post[]>;
}

export const githubContext = createContext({} as GithubContextProps);

export function GithubProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<_UserData | null>(null);

  const fetchUser = useCallback(async () => {
    const user = await getUserInfo();
    setUserData(user);
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const issues = await getRepoIssues(query);
    return issues.items
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <githubContext.Provider value={{ userData, fetchIssues }}>
      {children}
    </githubContext.Provider>
  );
}