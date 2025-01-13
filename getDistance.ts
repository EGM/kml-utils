import { EARTH_RADIUS } from "./constants.ts";
import { toRadians } from "./toRadians.ts";

export function getDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
): number {
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return EARTH_RADIUS * c; // Distance in kilometers
}