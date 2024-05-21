import { Icon } from 'leaflet';
import pinMarker from '../../svg/pinMarker.svg'
import parkMarker from "../../svg/parkMarker.svg"
import shopMarker from "../../svg/shopMarker.svg"
import eventMarker from "../../svg/eventMarker.svg"

/* Array of icons for the map

0- Spot
1- Skatepark
2- Shop
3- Event

*/

const DEFAULT_ICON = new Icon({
    iconUrl: pinMarker,
    iconSize: [45, 45],
})

const SKATEPARK_ICON = new Icon({
    iconUrl: parkMarker,
    iconSize: [30, 30]
})

const SHOP_ICON = new Icon({
    iconUrl: shopMarker,
    iconSize: [30, 30]
})

const EVENT_ICON = new Icon({
    iconUrl: eventMarker,
    iconSize: [45, 45]
})

// Icon for the map marker
const CUSTOM_ICONS = [
    DEFAULT_ICON,
    SKATEPARK_ICON,
    SHOP_ICON,
    EVENT_ICON,
]

export default CUSTOM_ICONS
