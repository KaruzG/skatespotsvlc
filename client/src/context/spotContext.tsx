import { createContext } from "react";
import { SpotData } from "../types/SpotData";

export const SpotContext = createContext<SpotData>({
  "spotId": 0,
  "name": "Loading data",
  "desc": "",
  "coords": {"alt": 1, "lat": 2},
  "type": 1,
  "stars": 0,
  "police": 0,
  "images": ["default.jpg"],
  "comments": [],
})
