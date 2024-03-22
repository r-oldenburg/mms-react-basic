import { createContext, useContext } from "react";

export const StateContext = createContext<{ state: number | null, setState: React.Dispatch<React.SetStateAction<number>> | null }>({ state: null, setState: null });