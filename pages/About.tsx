import React from 'react';
import { useContent } from '../context/ContentContext';
import { Users, History, Target } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 text-center">
           <span className="text-accent font-bold tracking-widest uppercase mb-2 block">About Us</span>
           <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Serving El Paso for 12+ Years</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            
            {/* Story Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <div className="flex-1">
                    <div className="bg-primary/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        <History className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Our History</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {content.general.history}
                    </p>
                </div>
                <div className="flex-1">
                    <img src="https://picsum.photos/seed/history/600/400" alt="History" className="rounded-lg shadow-lg w-full" />
                </div>
            </div>

            <hr className="border-slate-100 my-12" />

            {/* Mission Section */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
                <div className="flex-1">
                    <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Goal</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {content.general.missionLong}
                    </p>
                </div>
                <div className="flex-1">
                     <img src="https://picsum.photos/seed/goal/600/400" alt="Goal" className="rounded-lg shadow-lg w-full" />
                </div>
            </div>

            <hr className="border-slate-100 my-12" />

            {/* Partners Section */}
            <div>
                 <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Community Partners</h2>
                <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
                    We are honored to serve as a Partner in Education with YISD, EPISD, SISD, and CISD.
                    We also support the Opportunity Center for the Homeless, Church Under the Bridge, and God's Table.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {content.partners.map(p => (
                        <div key={p.id} className="bg-slate-50 border border-slate-100 p-6 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <span className="font-bold text-slate-400">{p.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;