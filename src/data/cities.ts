export interface CityConfig {
  id: string; // Internal ID
  name: string; // Display name
  country: string; // Display country
  timezone: string; // IANA timezone
  lat: number;
  lon: number;
}

export const majorCities: CityConfig[] = [
  { id: 'sao-paulo', name: 'São Paulo', country: 'Brazil', timezone: 'America/Sao_Paulo', lat: -23.5505, lon: -46.6333 },
  { id: 'new-york', name: 'New York', country: 'USA', timezone: 'America/New_York', lat: 40.7128, lon: -74.0060 },
  { id: 'london', name: 'London', country: 'UK', timezone: 'Europe/London', lat: 51.5074, lon: -0.1278 },
  { id: 'tokyo', name: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', lat: 35.6762, lon: 139.6503 },
  { id: 'paris', name: 'Paris', country: 'France', timezone: 'Europe/Paris', lat: 48.8566, lon: 2.3522 },
  { id: 'dubai', name: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', lat: 25.2048, lon: 55.2708 },
  { id: 'sydney', name: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', lat: -33.8688, lon: 151.2093 },
  { id: 'los-angeles', name: 'Los Angeles', country: 'USA', timezone: 'America/Los_Angeles', lat: 34.0522, lon: -118.2437 },
  { id: 'toronto', name: 'Toronto', country: 'Canada', timezone: 'America/Toronto', lat: 43.6510, lon: -79.3470 },
  { id: 'berlin', name: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', lat: 52.5200, lon: 13.4050 },
  { id: 'mumbai', name: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata', lat: 19.0760, lon: 72.8777 },
  { id: 'shanghai', name: 'Shanghai', country: 'China', timezone: 'Asia/Shanghai', lat: 31.2304, lon: 121.4737 },
  { id: 'moscow', name: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow', lat: 55.7558, lon: 37.6173 },
  { id: 'singapore', name: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', lat: 1.3521, lon: 103.8198 },
  { id: 'mexico-city', name: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', lat: 19.4326, lon: -99.1332 },
  { id: 'buenos-aires', name: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', lat: -34.6037, lon: -58.3816 },
  { id: 'istanbul', name: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul', lat: 41.0082, lon: 28.9784 },
  { id: 'seoul', name: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul', lat: 37.5665, lon: 126.9780 },
  { id: 'jakarta', name: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta', lat: -6.2088, lon: 106.8456 },
  { id: 'cairo', name: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo', lat: 30.0444, lon: 31.2357 },
  { id: 'johannesburg', name: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg', lat: -26.2041, lon: 28.0473 },
  { id: 'lagos', name: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos', lat: 6.5244, lon: 3.3792 },
  { id: 'hong-kong', name: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong', lat: 22.3193, lon: 114.1694 },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok', lat: 13.7563, lon: 100.5018 },
  { id: 'rome', name: 'Rome', country: 'Italy', timezone: 'Europe/Rome', lat: 41.9028, lon: 12.4964 },
  { id: 'madrid', name: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid', lat: 40.4168, lon: -3.7038 },
];

export const getDefaultCities = () => [
  'sao-paulo', 'new-york', 'london', 'tokyo', 
  'paris', 'dubai', 'sydney', 'los-angeles', 
  'toronto', 'berlin', 'mumbai', 'shanghai'
];

export const getCityById = (id: string) => majorCities.find(c => c.id === id);
