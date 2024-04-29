import { Icon } from 'leaflet';

/* Array of icons for the map

0- Spot
1- Skatepark
2- Shop
3- Event

*/

const DEFAULT_ICON = new Icon({
    iconUrl: "https://godirectplumbing.com/wp-content/uploads/2024/03/GPS-Icon.png",
    iconSize: [45, 45]
})

const SKATEPARK_ICON = new Icon({
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7jSUGXySWOQ9o2QL7-PPE_Cfb9vPBZp0uj-vMwzOvw&s",
    iconSize: [45, 45]
})

const SHOP_ICON = new Icon({
    iconUrl: "https://godirectplumbing.com/wp-content/uploads/2024/03/GPS-Icon.png",
    iconSize: [45, 45]
})

const EVENT_ICON = new Icon({
    iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7jSUGXySWOQ9o2QL7-PPE_Cfb9vPBZp0uj-vMwzOvw&s",
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