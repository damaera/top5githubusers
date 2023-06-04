import { createContext, useContext } from "react";

export const SearchContext = createContext(null);

const useSearchContext = () => useContext(SearchContext);
