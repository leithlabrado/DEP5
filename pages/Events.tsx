import React from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, Tag } from 'lucide-react';

const Events: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Community Events</h1>
          <p className="text-slate-400">Join us in making a difference.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={event.image || `https://picsum.photos/seed/${event.id}/800/400`} 
                  alt={event.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded font-bold text-sm flex items-center gap-2 shadow-sm">
                    <Calendar className="w-4 h-4" /> {event.date}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{event.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Tag className="w-4 h-4" />
                    <span>Community, Schools</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for sponsoring */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Sponsor a Child or Family</h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Every person who donates, along with every company we form a partnership with, 
                gives students an opportunity to achieve their own personal goals.
            </p>
            <a href={`mailto:${content.general.email}`} className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-accent hover:text-white transition-colors">
                Contact to Sponsor
            </a>
        </div>
      </div>
    </div>
  );
};

export default Events;