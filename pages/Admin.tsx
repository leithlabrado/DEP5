import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Settings, Save, RotateCcw, Plus, Trash2, LayoutDashboard, FileText, MapPin, Calendar as CalendarIcon, LogOut } from 'lucide-react';
import { BinLocation } from '../types';

const Admin: React.FC = () => {
  const { content, updateContent, resetToDefaults } = useContent();
  const [activeTab, setActiveTab] = useState('general');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  
  // Local state for forms to prevent excessive context updates on every keystroke
  const [formData, setFormData] = useState(content);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
      setFormData(content);
    } else {
      alert('Incorrect password. Try "admin123"');
    }
  };

  const handleSave = () => {
    updateContent(formData);
    alert('Changes published successfully!');
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      general: { ...formData.general, [e.target.name]: e.target.value }
    });
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      seo: { ...formData.seo, [e.target.name]: e.target.value }
    });
  };

  const toggleBin = (id: string) => {
    const updatedBins = formData.binLocations.map(bin => 
      bin.id === id ? { ...bin, active: !bin.active } : bin
    );
    setFormData({ ...formData, binLocations: updatedBins });
  };

  const deleteBin = (id: string) => {
    if(confirm("Delete this location?")) {
        setFormData({ 
            ...formData, 
            binLocations: formData.binLocations.filter(b => b.id !== id) 
        });
    }
  };

  const addBin = () => {
    const name = prompt("Enter location name:");
    if (name) {
        const newBin: BinLocation = {
            id: Date.now().toString(),
            name,
            active: true
        };
        setFormData({ ...formData, binLocations: [...formData.binLocations, newBin] });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Login</h2>
          <input 
            type="password" 
            placeholder="Password (admin123)" 
            className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-primary outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-primary text-white py-3 rounded font-bold hover:bg-slate-800 transition-colors">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-white font-bold text-xl">CMS Dashboard</h1>
          <p className="text-xs text-slate-500 mt-1">Donate El Paso v1.0</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
            <button onClick={() => setActiveTab('general')} className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left ${activeTab === 'general' ? 'bg-primary text-white' : 'hover:bg-slate-800'}`}>
                <FileText className="w-4 h-4" /> General Content
            </button>
            <button onClick={() => setActiveTab('bins')} className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left ${activeTab === 'bins' ? 'bg-primary text-white' : 'hover:bg-slate-800'}`}>
                <MapPin className="w-4 h-4" /> Bin Locations
            </button>
            <button onClick={() => setActiveTab('seo')} className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left ${activeTab === 'seo' ? 'bg-primary text-white' : 'hover:bg-slate-800'}`}>
                <Settings className="w-4 h-4" /> SEO & Meta
            </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
             <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-2 text-red-400 hover:text-red-300 text-sm">
                <LogOut className="w-4 h-4" /> Logout
             </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center sticky top-0 z-10">
            <h2 className="text-xl font-bold text-slate-800 capitalize">{activeTab} Settings</h2>
            <div className="flex gap-3">
                <button onClick={resetToDefaults} className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded border transition-colors">
                    <RotateCcw className="w-4 h-4" /> Reset
                </button>
                <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded font-bold shadow transition-colors">
                    <Save className="w-4 h-4" /> Publish Changes
                </button>
            </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto">
            
            {/* General Tab */}
            {activeTab === 'general' && (
                <div className="space-y-6 animate-fade-in">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                <input type="text" name="phone" value={formData.general.phone} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="text" name="email" value={formData.general.email} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Physical Address</label>
                                <input type="text" name="address" value={formData.general.address} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Mission & History</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Short Mission (Home Page)</label>
                                <textarea name="missionShort" rows={3} value={formData.general.missionShort} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Detailed Mission (About Page)</label>
                                <textarea name="missionLong" rows={5} value={formData.general.missionLong} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Company History</label>
                                <textarea name="history" rows={5} value={formData.general.history} onChange={handleGeneralChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bins Tab */}
            {activeTab === 'bins' && (
                <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Manage Bin Locations</h3>
                        <button onClick={addBin} className="bg-primary text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-slate-800">
                            <Plus className="w-4 h-4" /> Add Location
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {formData.binLocations.map(bin => (
                            <div key={bin.id} className={`flex items-center justify-between p-3 rounded border ${bin.active ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="checkbox" 
                                        checked={bin.active} 
                                        onChange={() => toggleBin(bin.id)}
                                        className="w-4 h-4 text-primary rounded"
                                    />
                                    <span className="font-medium text-slate-700">{bin.name}</span>
                                </div>
                                <button onClick={() => deleteBin(bin.id)} className="text-red-400 hover:text-red-600">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* SEO Tab */}
            {activeTab === 'seo' && (
                <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
                    <h3 className="font-bold text-lg mb-4 border-b pb-2">Search Engine Optimization</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Page Title</label>
                            <input type="text" name="title" value={formData.seo.title} onChange={handleSeoChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
                            <textarea name="description" rows={3} value={formData.seo.description} onChange={handleSeoChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary"></textarea>
                            <p className="text-xs text-slate-400 mt-1">Recommended length: 150-160 characters.</p>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Keywords</label>
                            <input type="text" name="keywords" value={formData.seo.keywords} onChange={handleSeoChange} className="w-full border p-2 rounded focus:ring-2 focus:ring-primary" />
                             <p className="text-xs text-slate-400 mt-1">Comma separated.</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default Admin;