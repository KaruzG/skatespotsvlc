export type SpotData = {
    "spotId": number,
    "name": string,
    "desc": string,
    "coords": {"alt": number, "lat": number},
    "type": number,
    "stars": number,
    "police": number,
    "images": string[],
    "comments": string[],
}