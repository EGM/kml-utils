/**
 * Function to calculate the angle of a point (x, y) from (0, 0) in radians
 * @param latitude 
 * @param longitude 
 * @returns 
 */
export function getAngle(latitude: number, longitude: number): number {
    return Math.atan2(longitude, latitude); // atan2 returns the angle in radians
}
