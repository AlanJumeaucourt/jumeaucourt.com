import React, { useEffect, useRef, useState } from 'react';
import Globe, { GlobeInstance } from 'react-globe.gl';
import { useLanguage } from '../contexts/LanguageContext';

// Define the Translation interface
interface Translation {
  title: string;
}

interface City {
  city: string;
  country: string;
  coordinates: [number, number];
}

const cityList: City[] = [
  { city: 'Paris', country: 'France', coordinates: [48.8566, 2.3522] },
  { city: 'Lyon', country: 'France', coordinates: [45.7578, 4.8320] },
  { city: 'Évreux', country: 'France', coordinates: [49.0270, 1.1508] },
  { city: 'Rouen', country: 'France', coordinates: [49.4432, 1.0999] },
  { city: 'Brest', country: 'France', coordinates: [48.3904, -4.4861] },
  { city: 'Pornic', country: 'France', coordinates: [47.1128, -2.1064] },
  { city: 'Les Sables-d\'Olonne', country: 'France', coordinates: [46.4974, -1.7831] },
  { city: 'La Roche-sur-Yon', country: 'France', coordinates: [46.6705, -1.4266] },
  { city: 'Saint-Jean-de-Monts', country: 'France', coordinates: [46.7905, -2.0639] },
  { city: 'London', country: 'England', coordinates: [51.5074, -0.1278] },
  { city: 'Barcelona', country: 'Spain', coordinates: [41.3851, 2.1734] },
  { city: 'Warsaw', country: 'Poland', coordinates: [52.2297, 21.0122] },
  { city: 'Vilnius', country: 'Lithuania', coordinates: [54.6872, 25.2797] },
  { city: 'Trakai', country: 'Lithuania', coordinates: [54.6377, 24.9326] },
  { city: 'Golem', country: 'Albania', coordinates: [41.327953, 19.819025] },
  { city: 'Phuket', country: 'Thailand', coordinates: [7.8804, 98.3923] },
  { city: 'Stockholm', country: 'Sweden', coordinates: [59.334591, 18.063240] },
  { city: 'Bratislava', country: 'Slovakia', coordinates: [48.148598, 17.107748] },
  { city: 'Vienna', country: 'Austria', coordinates: [48.210033, 16.363449] },
  { city: 'Venice', country: 'Italy', coordinates: [45.438759, 12.327145] },
  { city: 'Milan', country: 'Italy', coordinates: [45.464664, 9.188540] },
  { city: 'Prague', country: 'Czech Republic', coordinates: [50.073658, 14.418540] }
];

const TravelMap = () => {
  const { language } = useLanguage();
  const globeRef = useRef<GlobeInstance | null>(null);
  const [countries, setCountries] = useState<any[]>([]);

  const translations: { [key: string]: Translation } = {
    en: {
      title: 'My journey',
    },
    fr: {
      title: 'Mes voyages',
    }
  };

  // Group cities by country
  const visitedCountries = React.useMemo(() => {
    const countryMap = new Map<string, City[]>();
    cityList.forEach(city => {
      if (!countryMap.has(city.country)) {
        countryMap.set(city.country, []);
      }
      countryMap.get(city.country)?.push(city);
    });
    return countryMap;
  }, []);

  // Fetch countries data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/refs/heads/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => setCountries(data.features))
      .catch(error => console.error('Error loading countries data:', error));
  }, []);

  // Color function for hexed polygons
  const hexPolygonColor = React.useCallback((hexagon: any) => {
    const countryName = hexagon.properties.ADMIN;
    return visitedCountries.has(countryName) ? '#3b82f6' : 'rgba(56,189,248,0.05)';
  }, [visitedCountries]);

  // Altitude function for hexed polygons
  const hexPolygonAltitude = React.useCallback((hexagon: any) => {
    const countryName = hexagon.properties.ADMIN;
    return visitedCountries.has(countryName) ? 0.02 : 0.01;
  }, [visitedCountries]);

  // Label function for hexed polygons
  const hexPolygonLabel = React.useCallback((hexagon: any) => {
    const countryName = hexagon.properties.ADMIN;
    const cities = visitedCountries.get(countryName);
    if (cities) {
      return `
        <div class="bg-gray-900/90 px-2 py-1 rounded">
          <span class="text-white text-sm">${countryName}</span>
          ${cities.map(city => `<br><span class="text-white text-xs">${city.city}</span>`).join('')}
        </div>
      `;
    }
    return '';
  }, [visitedCountries]);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        {translations[language].title}
      </h2>
      <div className="card p-4 h-[600px] relative bg-gray-900/50 max-w-full overflow-hidden" onWheel={(e) => e.preventDefault()} onTouchMove={(e) => e.preventDefault()} onTouchStart={(e) => e.preventDefault()}>
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#38bdf8"
          atmosphereAltitude={0.15}
          hexPolygonsData={countries}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonUseDots={false}
          hexPolygonColor={hexPolygonColor}
          hexPolygonAltitude={hexPolygonAltitude}
          hexPolygonLabel={hexPolygonLabel}
        />
      </div>
    </div>
  );
};

export default TravelMap;
