import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Map, HeartHandshake } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Home: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1/1600/900" 
            alt="Donation Bin" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Giving Back to <br/>
            <span className="text-accent">Our El Paso Community</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Redirecting clothing from closets to the people who need them most. 
            Supporting local schools and families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-accent hover:bg-amber-600 text-white text-lg px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
              Donate Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Impact Ribbon */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-secondary mb-2">$20,000+</div>
              <p className="text-primary-100">Contributed to Schools Last Year</p>
            </div>
            <div className="p-4 border-l-0 md:border-l border-white/20">
              <div className="text-4xl font-bold text-secondary mb-2">30+</div>
              <p className="text-primary-100">Donation Bins across El Paso</p>
            </div>
            <div className="p-4 border-l-0 md:border-l border-white/20">
              <div className="text-4xl font-bold text-secondary mb-2">11.3M</div>
              <p className="text-primary-100">Tons of clothing saved from landfills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Partner in Education</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              {content.general.missionShort}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Pick-Up</h3>
              <p className="text-slate-600 mb-4">We want to make sure we support our community in every way possible by providing home pick-ups.</p>
              <Link to="/donate" className="text-primary font-semibold hover:text-accent">Schedule Pickup &rarr;</Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bin Locations</h3>
              <p className="text-slate-600 mb-4">With over 30 locations at local schools, finding a donation bin near you is easier than ever.</p>
              <Link to="/donate" className="text-primary font-semibold hover:text-accent">Find a Bin &rarr;</Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Monetary Support</h3>
              <p className="text-slate-600 mb-4">100% of all monetary contributions go to provide food and clothing to students at our local schools!</p>
              <Link to="/donate" className="text-primary font-semibold hover:text-accent">Support Us &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-10">Our Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
            {content.partners.map(partner => (
              <div key={partner.id} className="flex flex-col items-center">
                 {/* Using placeholders as per request since actual logos aren't provided */}
                 <div className="h-16 w-32 bg-slate-300 rounded flex items-center justify-center text-slate-500 font-bold text-sm">
                    {partner.name} LOGO
                 </div>
                 <span className="mt-2 text-sm text-slate-500">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;