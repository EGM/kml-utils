import { EARTH_RADIUS } from "./constants.ts";
import { toDegrees } from "./toDegrees.ts";
import { toRadians } from "./toRadians.ts";

/**
 * Calculates the destination point given a start point, a bearing, and a distance
 * @param lat1 Latitude of the starting point in degrees
 * @param lon1 Longitude of the starting point in degrees
 * @param bearing The bearing in degrees (angle from North)
 * @param distance The distance to travel in kilometers
 * @returns An object with the latitude and longitude of the destination point
 */
export function getPoint(
  lat1: number,
  lon1: number,
  bearing: number,
  distance: number,
): { latitude: number; longitude: number } {
  // Convert input degrees to radians
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const bearingRad = toRadians(bearing);

  // Calculate the destination latitude
  const lat2Rad = Math.asin(
    Math.sin(lat1Rad) * Math.cos(distance / EARTH_RADIUS) +
      Math.cos(lat1Rad) * Math.sin(distance / EARTH_RADIUS) *
        Math.cos(bearingRad),
  );

  // Calculate the destination longitude
  const lon2Rad = lon1Rad +
    Math.atan2(
      Math.sin(bearingRad) * Math.sin(distance / EARTH_RADIUS) *
        Math.cos(lat1Rad),
      Math.cos(distance / EARTH_RADIUS) - Math.sin(lat1Rad) * Math.sin(lat2Rad),
    );

  // Convert radians back to degrees
  const lat2 = toDegrees(lat2Rad);
  const lon2 = toDegrees(lon2Rad);

  // Return the destination coordinates
  return { latitude: lat2, longitude: lon2 };
}
