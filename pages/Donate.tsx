import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { MapPin, Phone, Mail, DollarSign, Package } from 'lucide-react';

type TabType = 'monetary' | 'bin' | 'pickup';

const Donate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('bin');
  const { content } = useContent();

  const activeLocations = content.binLocations.filter(loc => loc.active);

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Donate</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Your contributions directly help students and families in El Paso. Choose the method that works best for you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row border-b">
            <button 
              onClick={() => setActiveTab('monetary')}
              className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors flex items-center justify-center gap-2 ${activeTab === 'monetary' ? 'bg-white text-accent border-b-4 border-accent' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              <DollarSign className="w-5 h-5" /> Monetary Donation
            </button>
            <button 
              onClick={() => setActiveTab('bin')}
              className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors flex items-center justify-center gap-2 ${activeTab === 'bin' ? 'bg-white text-primary border-b-4 border-primary' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              <Package className="w-5 h-5" /> Donation Bins
            </button>
            <button 
              onClick={() => setActiveTab('pickup')}
              className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors flex items-center justify-center gap-2 ${activeTab === 'pickup' ? 'bg-white text-green-600 border-b-4 border-green-600' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              <Package className="w-5 h-5" /> Home Pick-Up
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12">
            
            {/* Monetary Tab */}
            {activeTab === 'monetary' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Support Our Mission Financially</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      100% of all monetary contributions goes to provide food and clothing to students at our local schools.
                      Remaining items are offered at a deeply discounted rate of only $0.30 per pound to help low-income families.
                    </p>
                    <button className="bg-accent hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-colors w-full md:w-auto">
                      Make a Secure Donation via PayPal
                    </button>
                  </div>
                  <div className="flex-1 bg-slate-100 p-6 rounded-xl">
                     <h3 className="font-bold text-primary mb-4">Your Impact</h3>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> $20 provides a warm jacket for a student</li>
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> $50 stocks a school pantry for a week</li>
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span> $100 sponsors a family in crisis</li>
                     </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Bins Tab */}
            {activeTab === 'bin' && (
              <div className="animate-fade-in">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Find a Location Near You</h2>
                        <p className="text-slate-600 mb-6">
                            We proudly maintain over 30 donation bins throughout El Paso. 
                            Look for our distinctive blue bins at these partner locations.
                        </p>
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6">
                            <h4 className="font-bold text-blue-800 mb-2">Accepted Items:</h4>
                            <p className="text-sm text-blue-700">Clothes, Shoes, Blankets, Accessories</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* Placeholder for Map */}
                        <div className="bg-slate-200 w-full h-64 rounded-xl flex items-center justify-center relative overflow-hidden group">
                           <img src="https://picsum.photos/seed/map/600/400" alt="Map Placeholder" className="w-full h-full object-cover opacity-60" />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <span className="bg-white/90 px-4 py-2 rounded shadow text-slate-800 font-bold">Interactive Map Component</span>
                           </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Location List</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeLocations.map(bin => (
                    <div key={bin.id} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded transition-colors border border-transparent hover:border-slate-200">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-slate-700 block">{bin.name}</span>
                        {bin.address && <span className="text-sm text-slate-500">{bin.address}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pickup Tab */}
            {activeTab === 'pickup' && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Schedule a Home Pick-Up</h2>
                <div className="flex flex-col md:flex-row gap-12">
                   <div className="flex-1 order-2 md:order-1">
                        <p className="text-slate-600 mb-8 text-lg">
                        We want to make sure we support our community in every way possible. 
                        If you have large donations or cannot reach a bin, we will come to you.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Call or Text</p>
                                    <a href={`tel:${content.general.phone.replace(/\./g, '')}`} className="text-2xl font-bold text-slate-800 hover:text-accent">
                                        {content.general.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Us</p>
                                    <a href={`mailto:${content.general.email}`} className="text-xl font-bold text-slate-800 hover:text-accent">
                                        {content.general.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                   </div>

                   <div className="flex-1 order-1 md:order-2">
                        <div className="rounded-xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src="https://picsum.photos/seed/truck/600/400" alt="Donate El Paso Truck" className="w-full h-auto" />
                            <div className="bg-slate-800 text-white p-4 text-center">
                                <span className="font-bold">Our Pick-Up Truck</span>
                            </div>
                        </div>
                   </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;