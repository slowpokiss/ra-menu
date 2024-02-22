import { createContext, SetStateAction, Dispatch } from "react";

interface RouterContext {
  page: string,
  setPage: Dispatch<SetStateAction<string>>
}


export const RouterContext = createContext({
  page: '',
  setPage: () => {},
} as RouterContext)
