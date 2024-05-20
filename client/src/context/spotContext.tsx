import { createContext } from "react";
import { SpotData } from "../types/spotData";


// @ts-expect-error This is working fine like this but should fix te typing
export const SpotContext = createContext<SpotData>({})
