import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Place {
  city: string;
  country: string;
  coordinates: [number, number];
  // optional type to differentiate marker color
  type?: 'visit' | 'work' | 'other';
}

const placeList: Place[] = [
  { city: 'Paris', country: 'France', coordinates: [48.8566, 2.3522] },
  { city: 'Lyon', country: 'France', coordinates: [45.7578, 4.8320], type: 'work' },
  { city: 'Le Havre', country: 'France', coordinates: [49.4943, 0.1079] },
  { city: 'Évreux', country: 'France', coordinates: [49.0270, 1.1508], type: 'work' },
  { city: 'Rouen', country: 'France', coordinates: [49.4432, 1.0999], type: 'work' },
  { city: 'Brest', country: 'France', coordinates: [48.3904, -4.4861] },
  { city: 'Pornic', country: 'France', coordinates: [47.1128, -2.1064] },
  { city: 'Les Sables-d\'Olonne', country: 'France', coordinates: [46.4974, -1.7831] },
  { city: 'La Roche-sur-Yon', country: 'France', coordinates: [46.6705, -1.4266] },
  { city: 'Saint-Jean-de-Monts', country: 'France', coordinates: [46.7905, -2.0639] },
  { city: 'London', country: 'England', coordinates: [51.5074, -0.1278] },
  { city: 'Barcelona', country: 'Spain', coordinates: [41.3851, 2.1734] },
  { city: 'Warsaw', country: 'Poland', coordinates: [52.2297, 21.0122] },
  { city: 'Vilnius', country: 'Lithuania', coordinates: [54.6872, 25.2797], type: 'work' },
  { city: 'Trakai', country: 'Lithuania', coordinates: [54.6377, 24.9326] },
  { city: 'Golem', country: 'Albania', coordinates: [41.327953, 19.819025] },
  { city: 'Phuket', country: 'Thailand', coordinates: [7.8804, 98.3923] },
  { city: 'Stockholm', country: 'Sweden', coordinates: [59.334591, 18.063240] },
  { city: 'Bratislava', country: 'Slovakia', coordinates: [48.148598, 17.107748] },
  { city: 'Vienna', country: 'Austria', coordinates: [48.210033, 16.363449] },
  { city: 'Venice', country: 'Italy', coordinates: [45.438759, 12.327145] },
  { city: 'Milan', country: 'Italy', coordinates: [45.464664, 9.188540] },
  { city: 'Prague', country: 'Czech Republic', coordinates: [50.073658, 14.418540] },
  { city: 'Budapest', country: 'Hungary', coordinates: [47.497913, 19.040235] },
  { city: 'Krakow', country: 'Poland', coordinates: [50.064650, 19.936579] },
  { city: 'Tivoli', country: 'Italy', coordinates: [41.960922, 12.798884] },
  { city: 'Zagreb', country: 'Croatia', coordinates: [45.815399, 15.966568] },
  { city: 'Zadar', country: 'Croatia', coordinates: [44.119291, 15.265136] },
  { city: 'Split', country: 'Croatia', coordinates: [43.508129, 16.440193] },
  { city: 'Dubrovnik', country: 'Croatia', coordinates: [42.648471, 18.108859] },
  { city: 'Hvar', country: 'Croatia', coordinates: [43.170792812274414, 16.444345044353323] },
  { city: 'Toulouse', country: 'France', coordinates: [43.604652, 1.444209] },
  { city: 'Bayonne', country: 'France', coordinates: [43.493868, -1.469328] },
  { city: 'Rome', country: 'Italy', coordinates: [41.9028, 12.4964] },
  { city: 'Eskape Festival', country: 'France', coordinates: [48.811111, -0.572583] },
  { city: 'Defqon1 Festival', country: 'Netherlands', coordinates: [52.44084102170957, 5.744208702456352] },
  { city: 'Hvar island', country: 'Croatia', coordinates: [43.15053560249637, 16.686634614752997] },
  { city: 'Korcula', country: 'Croatia', coordinates: [42.96109879354572, 17.135651214833523] },
  { city: 'Komolac', country: 'Croatia', coordinates: [42.67231678556436, 18.135724495664324] },
  { city: 'Potomje', country: 'Croatia', coordinates: [42.94057599772, 17.337515791237877] },
  { city: 'Orebić', country: 'Croatia', coordinates: [42.974350188906385, 17.17618427896365] },
  { city: 'Pakleni Islands', country: 'Croatia', coordinates: [43.163856, 16.370897] },
  { city: 'Humac', country: 'Croatia', coordinates: [43.142529, 16.759456] },
  { city: 'Split-Dalmatia County', country: 'Croatia', coordinates: [43.516350, 16.249217] },
  { city: 'Plitvice Lakes', country: 'Croatia', coordinates: [44.86269115476936, 15.599679612529776] },
  { city: 'Annecy', country: 'France', coordinates: [45.899229, 6.128803] },
  { city: 'Malia', country: 'Greece', coordinates: [35.285186, 25.459889  ] },
  { city: 'Marseille', country: 'France', coordinates: [43.296174, 5.369952] },
  { city: 'Caen', country: 'France', coordinates: [49.180864, -0.371271] },
  { city: 'Saint-Valery-en-Caux', country: 'France', coordinates: [49.7669, 0.6123], type: 'work' },
  { city: 'Bucharest', country: 'Romania', coordinates: [44.4268, 26.1025], type: 'work' },
  { city: 'Constanta', country: 'Romania', coordinates: [44.1598, 28.6348] },
];

interface MapPoint {
  position: [number, number];
  city: string;
  country: string;
  marker: L.Marker;
}

const TravelMap: React.FC = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<MapPoint[]>([]);
  // mapReady was previously unused; omit to keep lint clean
  const [hoveredPoint, setHoveredPoint] = useState<MapPoint | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const translations = {
    en: {
      title: 'My Journey',
      subtitle: 'Places I\'ve explored around the world (because why not?)',
      placesVisited: 'Places Visited',
      countriesExplored: 'Countries Explored',
      memoriesCreated: 'Countless Memories',
      photosTaken: '(Way) Too Many Photos'
    },
    fr: {
      title: 'Mon Voyage',
      subtitle: 'Les endroits que j\'ai explorés dans le monde (parce que pourquoi pas ?)',
      placesVisited: 'Endroits Visités',
      countriesExplored: 'Pays Explorés',
      memoriesCreated: 'Souvenirs Infinis',
      photosTaken: '(Vraiment) Beaucoup trop de Photos'
    }
  };

  const t = translations[language as keyof typeof translations];

  // Calculate statistics
  const totalPlaces = placeList.length;
  const totalCountries = new Set(placeList.map(place => place.country)).size;

  useEffect(() => {
    const initMap = async () => {
      try {
        if (mapRef.current && !mapInstanceRef.current) {
          // Create POSITRON tile layer (light theme)
          const positronTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap contributors © CARTO',
            subdomains: 'abcd',
            maxZoom: 19
          });

          // Initialize map
          const map = L.map(mapRef.current, {
            center: [50, 10], // Center on Europe
            zoom: 4,
            zoomControl: false,
            attributionControl: false,
            layers: [positronTileLayer]
          });

          // Add zoom control to top right
          L.control.zoom({
            position: 'topright'
          }).addTo(map);

          mapInstanceRef.current = map;

          // Wait for map to load
          map.whenReady(() => {
            // Create markers for each place
              // color mapping by place type (customize as you like)
              const colorMap: Record<string, string> = {
                visit: '#3b82f6', // blue
                work: '#10b981', // green
                other: '#9ca3af' // gray
              };

              const markers: MapPoint[] = placeList.map(place => {
              // Create custom marker element
              const markerElement = document.createElement('div');
              markerElement.className = 'custom-marker';
              const baseColor = colorMap[place.type ?? 'visit'] || colorMap.visit;
              markerElement.style.cssText = `
                width: 16px;
                height: 16px;
                background-color: ${baseColor};
                border: 2px solid #ffffff;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0 2px 8px rgba(0,0,0,0.4);
              `;

              // Create custom icon
              const customIcon = L.divIcon({
                html: markerElement,
                className: 'custom-div-icon',
                iconSize: [16, 16],
                iconAnchor: [8, 8]
              });

              const marker = L.marker(place.coordinates, {
                icon: customIcon
              }).addTo(map);

              // Create popup and render a React component into it
              const popup = L.popup({
                closeButton: true,
                closeOnClick: false,
                className: 'custom-popup',
                maxWidth: 300,
                autoPan: true,
                autoPanPadding: [50, 50]
              });

              // Directly create and set the popup content
              const popupContent = document.createElement('div');
              popupContent.innerHTML = `
                <div class="bg-white/95 backdrop-blur-sm text-gray-800">
                  <div class="font-bold text-lg text-blue-600">${place.city}</div>
                  <div class="text-gray-600 mb-2">${place.country}</div>
                  ${place.type ? `
                    <div class="flex flex-col gap-1">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style="background-color: ${colorMap[place.type]}40; color: ${colorMap[place.type]}">
                        ${place.type}
                      </span>
                    </div>
                  ` : ''}
                </div>
              `;
              popup.setContent(popupContent);

              // Add event listeners to the marker
              marker.on('click', () => {
                popup.setLatLng(place.coordinates).openOn(map);
              });

              marker.on('mouseover', () => {
                setHoveredPoint({ position: place.coordinates, city: place.city, country: place.country, marker });
                // enlarge and highlight on hover
                markerElement.style.cssText = `
                  width: 24px;
                  height: 24px;
                  background-color: #f59e0b;
                  border: 3px solid #ffffff;
                  border-radius: 50%;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
                `;
              });

              marker.on('mouseout', () => {
                setHoveredPoint(null);
                // restore original size and color (based on type)
                markerElement.style.cssText = `
                  width: 16px;
                  height: 16px;
                  background-color: ${baseColor};
                  border: 2px solid #ffffff;
                  border-radius: 50%;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                `;
              });

              return {
                position: place.coordinates,
                city: place.city,
                country: place.country,
                marker
              };
            });

            markersRef.current = markers;
            setIsLoading(false);
          });

          // Handle map errors
          map.on('error', () => {
            console.error('Leaflet error');
            setIsLoading(false);
          });
        }
      } catch (error) {
        console.error('Error loading Leaflet:', error);
        setIsLoading(false);
      }
    };

    if (inView) {
      initMap();
    }
  }, [inView]);

  return (
    <section id="travels" className="py-20 relative">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t.subtitle}
          </p>

          {/* Statistics */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{totalPlaces}</div>
              <div className="text-gray-400">{t.placesVisited}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{totalCountries}</div>
              <div className="text-gray-400">{t.countriesExplored}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-gray-400">{t.memoriesCreated}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">📸</div>
              <div className="text-gray-400">{t.photosTaken}</div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Map Container */}
          <div className="relative h-[600px] md:h-[700px] bg-gradient-to-b from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
            <div ref={mapRef} className="w-full h-full" />

            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-gray-300">Loading map...</p>
                </div>
              </div>
            )}

            {/* Hovered city info */}
            {hoveredPoint && (
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 p-4 rounded-lg border border-gray-200 shadow-xl max-w-xs z-10">
                <h3 className="font-bold text-lg text-blue-600 mb-1">{hoveredPoint.city}</h3>
                <p className="text-gray-600">{hoveredPoint.country}</p>
                <div className="mt-2 text-sm text-gray-500">
                  📍 {hoveredPoint.position[0].toFixed(4)}°, {hoveredPoint.position[1].toFixed(4)}°
                </div>
              </div>
            )}

            {/* Controls hint */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-700 p-3 rounded-lg border border-gray-200 text-sm z-10">
              <div className="flex items-center gap-2 mb-1">
                <span>🖱️ Drag to pan</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔍 Scroll to zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default TravelMap;
