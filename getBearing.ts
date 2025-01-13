import { toRadians } from "./toRadians.ts";

// Function to calculate the bearing between two geographical points (lat1, lon1) and (lat2, lon2)
export function getBearing(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
): number {
    // Convert degrees to radians
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    // Calculate the difference in longitudes
    const deltaLon = lon2 - lon1;

    // Apply the formula for bearing
    const y = Math.sin(deltaLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);

    // Calculate the bearing in radians
    let bearing = Math.atan2(y, x);

    // Convert bearing from radians to degrees
    bearing = (bearing * 180 / Math.PI + 360) % 360; // Normalize the bearing to a positive value between 0 and 360

    return bearing;
}
