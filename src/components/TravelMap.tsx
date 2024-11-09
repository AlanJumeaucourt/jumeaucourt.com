import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { useInView } from '../hooks/useInView';
import { centroid, distance } from '@turf/turf';
import * as turf from '@turf/turf';

interface HexBinPoint {
  lat: number;
  lng: number;
  weight: number;
}

interface TravelLocationProps {
  location: string;
  color: string;
}

interface HexBin {
  sumWeight: number;
  centroid: {
    lat: number;
    lng: number;
  };
}

interface CountryFeature extends GeoJSONFeature {}

// Add TravelLocation interface
interface TravelLocation {
  location: string;
  coordinates: [number, number];
  color: string;
  showInList: boolean;
  country: string;
}

// Add this interface for the GeoJSON geometry
interface GeoJSONFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    ADMIN: string;
    ISO_A2: string;
  };
}

const TravelLocationCard = ({ location, color }: TravelLocationProps) => {
  return (
    <div className="card p-4 bg-gray-800/50 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div 
          className="w-2 h-2 rounded-full" 
          style={{ backgroundColor: color }}
        />
        <span className="text-gray-200">{location}</span>
      </div>
    </div>
  );
};

const TravelMap = () => {
  const { ref, isInView } = useInView();
  const globeRef = useRef<any>();
  const [countries, setCountries] = useState<{ features: GeoJSONFeature[] }>({ features: [] });
  const [travelMatches, setTravelMatches] = useState<Map<string, string>>(new Map());

  // Memoize travels data to prevent unnecessary recalculations
  const travels = React.useMemo<TravelLocation[]>(() => [
    {
      location: 'Paris, France',
      coordinates: [48.8566, 2.3522],
      color: '#3b82f6',
      showInList: true,
      country: 'France'
    },
    {
      location: 'Lyon, France',
      coordinates: [45.7578, 4.8320],
      color: '#3b82f6',
      showInList: true,
      country: 'France'
    },
    {
      location: 'Évreux, France',
      coordinates: [49.0270, 1.1508],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'Rouen, France',
      coordinates: [49.4432, 1.0999],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'Brest, France',
      coordinates: [48.3904, -4.4861],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'Pornic, France',
      coordinates: [47.1128, -2.1064],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'Les Sables-d\'Olonne, France',
      coordinates: [46.4974, -1.7831],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'La Roche-sur-Yon, France',
      coordinates: [46.6705, -1.4266],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'Saint-Jean-de-Monts, France',
      coordinates: [46.7905, -2.0639],
      color: '#3b82f6',
      showInList: false,
      country: 'France'
    },
    {
      location: 'London, England',
      coordinates: [51.5074, -0.1278],
      color: '#60a5fa',
      showInList: true,
      country: 'England'
    },
    {
      location: 'Barcelona, Spain',
      coordinates: [41.3851, 2.1734],
      color: '#93c5fd',
      showInList: true,
      country: 'Spain'
    },
    {
      location: 'Warsaw, Poland',
      coordinates: [52.2297, 21.0122],
      color: '#bfdbfe',
      showInList: true,
      country: 'Poland'
    },
    {
      location: 'Vilnius, Lithuania',
      coordinates: [54.6872, 25.2797],
      color: '#dbeafe',
      showInList: true,
      country: 'Lithuania'
    },
    {
      location: 'Trakai, Lithuania',
      coordinates: [54.6377, 24.9326],
      color: '#dbeafe',
      showInList: true,
      country: 'Lithuania'
    },
    {
      location: 'Golem, Albania',
      coordinates: [41.2417, 19.5256],
      color: '#eff6ff',
      showInList: true,
      country: 'Albania'
    },
    {
      location: 'Phuket, Thailand',
      coordinates: [7.8804, 98.3923],
      color: '#3b82f6',
      showInList: true,
      country: 'Thailand'
    }
  ], []); // Empty dependency array since this data is static

  // Fetch countries data only once
  useEffect(() => {
    let mounted = true;
    
    fetch('/src/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        if (mounted) {
          setCountries(data);
        }
      })
      .catch(error => console.error('Error loading countries data:', error));

    return () => {
      mounted = false;
    };
  }, []);

  // Compute closest polygons and find polygons within 100km
  useEffect(() => {
    const matches = new Map<string, string>();

    travels.forEach((travel) => {
      let closestCountry = '';

      // Filter the features to only those that match the travel's country
      const relevantFeatures = countries.features.filter(
        (feature) => feature.properties.ADMIN === travel.country
      );

      relevantFeatures.forEach((feature) => {
        try {
          if (feature.geometry) {
            // Create a polygon from the feature's geometry
            const polygon = turf.polygon(feature.geometry.coordinates);

            // Check if the travel location is within the polygon
            const point = turf.point(travel.coordinates);
            if (turf.booleanPointInPolygon(point, polygon)) {
              closestCountry = feature.properties.ADMIN;
              return; // Exit early if the point is within the polygon
            }
          } else {
            console.warn(`No geometry available for country: ${feature.properties.ADMIN}`);
          }
        } catch (error) {
          console.error(`Error processing polygon for country: ${feature.properties.ADMIN}`, error);
        }
      });

      matches.set(travel.location, closestCountry);
    });

    setTravelMatches(matches);
  }, [travels, countries]);

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.minDistance = 200;
    controls.maxDistance = 200;
    
    globeRef.current.pointOfView({ lat: 48.8566, lng: 2.3522, altitude: 2.5 });
  }, []); // Empty dependency array since we only want to initialize once

  // Memoize the color callback with hexagon-level check
  const hexPolygonColor = React.useCallback((hexagon: any) => {
    try {
      // Get the center of this specific hexagon
      const hexCenter = turf.center(hexagon);
      const [hexLng, hexLat] = hexCenter.geometry.coordinates;

      // For each travel location, calculate distance to this hexagon
      let minDistance = Infinity;
      let closestTravel = null;

      for (const travel of travels) {
        if (travel.country === hexagon.properties.ADMIN) { // Ensure hexagon is in the same country
          const dist = turf.distance(
            [hexLng, hexLat],
            [travel.coordinates[1], travel.coordinates[0]],
            { units: 'kilometers' }
          );

          if (dist < minDistance) {
            minDistance = dist;
            closestTravel = travel;
          }
        }
      }

      // Color the hexagon based on the closest travel location
      return closestTravel ? `${closestTravel.color}cc` : 'rgba(56,189,248,0.05)';
    } catch (error) {
      return 'rgba(56,189,248,0.05)';
    }
  }, [travels]);

  // Memoize the altitude callback with similar logic
  const hexPolygonAltitude = React.useCallback((hexagon: any) => {
    try {
      const hexCenter = turf.center(hexagon);
      const [hexLng, hexLat] = hexCenter.geometry.coordinates;

      let minDistance = Infinity;

      for (const travel of travels) {
        if (travel.country === hexagon.properties.ADMIN) { // Ensure hexagon is in the same country
          const dist = turf.distance(
            [hexLng, hexLat],
            [travel.coordinates[0], travel.coordinates[1]],
            { units: 'kilometers' }
          );
          minDistance = Math.min(minDistance, dist);
        }
      }

      // Set altitude based on the closest travel location
      return minDistance < Infinity ? 0.02 : 0.01;
    } catch (error) {
      return 0.01;
    }
  }, [travels]);

  // Memoize the label callback
  const hexPolygonLabel = React.useCallback((d: any) => {
    const country = d.properties?.ADMIN;
    const citiesInCountry = travels.filter(city => 
      city.location.includes(country)
    );
    if (citiesInCountry.length > 0) {
      return `
        <div class="bg-gray-900/90 px-2 py-1 rounded">
          <span class="text-white text-sm">${country}</span>
          ${citiesInCountry.map(city => 
            `<br><span class="text-white text-xs">${city.location}</span>`
          ).join('')}
        </div>
      `;
    }
    return '';
  }, [travels]);

  return (
    <section id="travels" ref={ref} className={`py-16 pb-32 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          My Journey Around the Globe
        </h2>
        <div className="card p-4 h-[600px] relative bg-gray-900/50 max-w-full overflow-hidden">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="#38bdf8"
            atmosphereAltitude={0.15}
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.3}
            hexPolygonUseDots={false}
            hexPolygonColor={hexPolygonColor}
            hexPolygonAltitude={hexPolygonAltitude}
            hexPolygonLabel={hexPolygonLabel}
          />
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travels
              .filter(city => city.showInList)
              .map((city, index) => (
                <TravelLocationCard
                  key={index}
                  location={city.location}
                  color={city.color}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMap;