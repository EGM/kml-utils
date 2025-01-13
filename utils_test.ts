import { assertEquals } from "jsr:@std/assert";
import { UTILS } from "./mod.ts";

const lat1 = 40.748817; // Latitude of point 1
const lon1 = -73.985428; // Longitude of point 1 (New York)
const lat2 = 34.052235; // Latitude of point 2
const lon2 = -118.243683; // Longitude of point 2 (Los Angeles)
const mLat = 39.5306382158797;
const mLon = -97.15665605188866;
const BEARING = 273.6486236927228;
const DISTANCE = 3937.2169108840662;
const RADIANS = 0.5235987755982988;
const centerLat = 37.7749; // Latitude of the center (e.g., San Francisco)
const centerLon = -122.4194; // Longitude of the center (e.g., San Francisco)
const radius = 10; // Radius in kilometers
const startAngle = 0; // Starting angle in degrees (0° = North)
const endAngle = 90; // Ending angle in degrees (90° = East)
const numPoints = 10; // Number of points to generate along the arc
const ARC_POINTS = [
    { latitude: 37.864990090090096, longitude: -122.4194 },
    { latitude: 37.86362141919029, longitude: -122.3996081021016 },
    { latitude: 37.859556992863595, longitude: -122.38041757100567 },
    { latitude: 37.85292030664725, longitude: -122.36241150128866 },
    { latitude: 37.8439130128936, longitude: -122.34613699826743 },
    { latitude: 37.83280879366546, longitude: -122.33208855448098 },
    { latitude: 37.819945045045046, longitude: -122.32069302478489 },
    { latitude: 37.80571262552484, longitude: -122.31229665658257 },
    { latitude: 37.790543979969996, longitude: -122.3071545692731 },
    { latitude: 37.7749, longitude: -122.30542300257733 },
];



Deno.test("Constants", () => {
    assertEquals(UTILS.EARTH_RADIUS, 6371);
});

Deno.test("getArcPoints", () => {
const arcPoints = UTILS.getArcPoints(
    centerLat,
    centerLon,
    radius,
    startAngle,
    endAngle,
    numPoints,
);    
    assertEquals(arcPoints, ARC_POINTS);
});

Deno.test("getBearing()", () => {
    const bearing = UTILS.getBearing(lat1, lon1, lat2, lon2);
    assertEquals(bearing, BEARING);
});

Deno.test("getDistance()", () => {
    const distance = UTILS.getDistance(lat1, lon1, lat2, lon2);
    assertEquals(distance, DISTANCE);
});

Deno.test("getMidpoint()", () => {
    const midpoint = UTILS.getMidpoint(lat1, lon1, lat2, lon2);
    assertEquals(midpoint, {
        latitude: mLat,
        longitude: mLon,
    });
});

Deno.test("getPoint()", () => {
    const point = UTILS.getPoint(
        lat1,
        lon1,
        BEARING,
        DISTANCE,
    );
    point.latitude = Math.round(point.latitude * 1000000) / 1000000;
    assertEquals(point, { latitude: lat2, longitude: lon2 });
});

Deno.test("toDegrees", () => {
    const degrees = UTILS.toDegrees(RADIANS);
    assertEquals(Math.round(degrees), 30);
});

Deno.test("toRadians", () => {
    assertEquals(UTILS.toRadians(30), RADIANS);
});

//console.log( ARC_POINTS.map(p => `${p.longitude},${p.latitude}`).join(" "))