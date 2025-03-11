
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface Location {
  id: number;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  hours: string;
}

const Footer = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapApiKey, setMapApiKey] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  // Example clinic locations
  const locations: Location[] = [
    {
      id: 1,
      name: "PhysioClinic Downtown",
      address: "123 Main St, Downtown, City",
      coordinates: { lat: 40.712776, lng: -74.005974 },
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8am-7pm"
    },
    {
      id: 2,
      name: "PhysioClinic Westside",
      address: "456 West Ave, Westside, City",
      coordinates: { lat: 40.718234, lng: -74.077932 },
      phone: "(555) 987-6543",
      hours: "Mon-Sat: 7am-8pm"
    },
    {
      id: 3,
      name: "PhysioClinic Uptown",
      address: "789 North Blvd, Uptown, City",
      coordinates: { lat: 40.734567, lng: -73.990123 },
      phone: "(555) 456-7890",
      hours: "Mon-Sun: 9am-6pm"
    }
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
  };

  const center = {
    lat: 40.72,
    lng: -74.02
  };

  const handleApiKeySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowApiKeyInput(false);
  };

  // Service categories with their specific services
  const serviceCategories = [
    {
      category: "Rehabilitation",
      services: ["Sports Injuries", "Post-Surgery", "Chronic Pain", "Spine Rehabilitation"]
    },
    {
      category: "Specialized Care",
      services: ["Pediatric Therapy", "Geriatric Care", "Neurological Rehab", "Cardiopulmonary Rehab"]
    },
    {
      category: "Wellness",
      services: ["Preventive Care", "Ergonomic Assessment", "Fitness Programs", "Balance Training"]
    }
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">PhysioClinic</h3>
            <p className="text-sm">
              Providing expert physiotherapy care for over 10 years, with a focus on 
              personalized treatment plans and comprehensive rehabilitation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <span>contact@physioclinic.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <span>123 Healing Street, Wellness City</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>Mon-Fri: 8am-7pm, Sat: 9am-5pm</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {serviceCategories.map((category, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold mb-2">{category.category}</h4>
                  <ul className="space-y-1">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-sm">
                        <a href="#services" className="hover:text-primary-light transition-colors flex items-center gap-1">
                          <ExternalLink size={12} />
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Find a Clinic Near You</h3>
            {showApiKeyInput ? (
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm mb-4">
                  To view our clinic locations on the map, please enter your Google Maps API key:
                </p>
                <form onSubmit={handleApiKeySubmit} className="space-y-2">
                  <input 
                    type="text" 
                    value={mapApiKey}
                    onChange={(e) => setMapApiKey(e.target.value)}
                    placeholder="Enter Google Maps API Key"
                    className="w-full px-3 py-2 text-gray-800 rounded-md text-sm"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-primary hover:bg-gray-100"
                  >
                    Load Map
                  </Button>
                </form>
                <p className="text-xs mt-2 text-white/70">
                  Your API key is used only in your browser and is not stored by us.
                </p>
              </div>
            ) : (
              <>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <LoadScript googleMapsApiKey={mapApiKey}>
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={center}
                      zoom={11}
                    >
                      {locations.map(location => (
                        <Marker
                          key={location.id}
                          position={location.coordinates}
                          onClick={() => setSelectedLocation(location)}
                        />
                      ))}

                      {selectedLocation && (
                        <InfoWindow
                          position={selectedLocation.coordinates}
                          onCloseClick={() => setSelectedLocation(null)}
                        >
                          <div className="p-2 max-w-xs text-gray-800">
                            <h4 className="font-semibold">{selectedLocation.name}</h4>
                            <p className="text-sm mt-1">{selectedLocation.address}</p>
                            <p className="text-sm mt-1">{selectedLocation.phone}</p>
                            <p className="text-sm mt-1">{selectedLocation.hours}</p>
                          </div>
                        </InfoWindow>
                      )}
                    </GoogleMap>
                  </LoadScript>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-semibold">Our Locations:</p>
                  {locations.map(location => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className="block text-left hover:text-primary-light transition-colors text-sm"
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Section with Quick Links and Copyright */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
                <li><a href="#home" className="text-sm hover:text-primary-light transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm hover:text-primary-light transition-colors">About</a></li>
                <li><a href="#services" className="text-sm hover:text-primary-light transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-sm hover:text-primary-light transition-colors">Testimonials</a></li>
                <li><a href="#events" className="text-sm hover:text-primary-light transition-colors">Events</a></li>
                <li><a href="#" className="text-sm hover:text-primary-light transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-primary-light transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} PhysioClinic. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
