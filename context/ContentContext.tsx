import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, ContentContextType } from '../types';
import { INITIAL_CONTENT } from '../constants';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  // Try to load from local storage to simulate database persistence
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('donateElPasoContent');
    return saved ? JSON.parse(saved) : INITIAL_CONTENT;
  });

  useEffect(() => {
    localStorage.setItem('donateElPasoContent', JSON.stringify(content));
    // Update document title dynamically for SEO simulation
    document.title = content.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.seo.description);
    }
  }, [content]);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const resetToDefaults = () => {
    if (confirm("Are you sure you want to reset all content to the original state?")) {
      setContent(INITIAL_CONTENT);
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetToDefaults }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};