import { createContext } from "react";
import { SpotData } from "../types/SpotData";

export const AllSpotsContext = createContext<SpotData[]>([
    {
        "spotId": 1,
        "name": "Loading data",
        "desc": "",
        "coords": {"alt": 1, "lat": 2},
        "type": 1,
        "stars": 0,
        "police": 0,
        "images": ["default.jpg"],
        "comments": [],
      }
])
