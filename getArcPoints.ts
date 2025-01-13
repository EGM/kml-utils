import { toRadians } from "./toRadians.ts";
  
  // Function to generate points along an arc
export  function getArcPoints(centerLat: number, centerLon: number, radius: number, startAngle: number, endAngle: number, numPoints: number): { latitude: number, longitude: number }[] {
    const points: { latitude: number, longitude: number }[] = [];
    
    // Normalize angles if needed
    startAngle = startAngle % 360;
    endAngle = endAngle % 360;
  
    // Ensure that the start angle is less than the end angle
    if (startAngle > endAngle) {
      endAngle += 360;
    }
  
    // Step size in terms of angle
    const step = (endAngle - startAngle) / (numPoints - 1);
  
    // Generate points along the arc
    for (let i = 0; i < numPoints; i++) {
      const angle = toRadians(startAngle + i * step); // Convert to radians
  
      // Calculate the latitude and longitude of the point on the circle
      const latitude = centerLat + (radius / 111) * Math.cos(angle); // Approx. conversion (1 degree latitude ~ 111 km)
      const longitude = centerLon + (radius / (111 * Math.cos(toRadians(centerLat)))) * Math.sin(angle); // Adjust for longitude distance
      
      points.push({ latitude, longitude });
    }
  
    return points;
  }