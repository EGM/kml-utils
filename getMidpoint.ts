import { toDegrees } from "./toDegrees.ts";
import { toRadians } from "./toRadians.ts";

export function getMidpoint(lat1:number, lon1:number, lat2:number, lon2:number) {
    // Convert degrees to radians
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    // Calculate the midpoint
    const dLon = lon2 - lon1;

    const Bx = Math.cos(lat2) * Math.cos(dLon);
    const By = Math.cos(lat2) * Math.sin(dLon);

    let latMid = Math.atan2(Math.sin(lat1) + Math.sin(lat2),
        Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat1) + Bx) + By * By));
    
    let lonMid = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);

    // Convert the midpoint back to degrees
    latMid = toDegrees(latMid);
    lonMid = toDegrees(lonMid);

    return { latitude: latMid, longitude: lonMid };
}