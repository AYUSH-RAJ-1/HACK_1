import React from 'react';
import type { Mood } from '../types';
import Card from './LoadingSpinner'; // Repurposed LoadingSpinner as Card

interface MoodCategoriesProps {
  moods: Mood[];
  age: number | null;
  onSelectMood: (moodId: Mood['id']) => void;
  onSelectExplore: (type: 'non-alcoholic' | 'alcoholic' | 'indie') => void;
  onGoToChat: () => void;
}

const MoodCategories: React.FC<MoodCategoriesProps> = ({ moods, age, onSelectMood, onSelectExplore, onGoToChat }) => {
  const isOfAge = age !== null && age >= 21;
  
  return (
    <div className="p-4 sm:p-8">
      <div className="text-center mb-10">
         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-100">How Are You </span>
          <span className="text-brand-primary">Feeling Today?</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 mt-4">
          Select a mood to discover beverages that can help you feel your best.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {moods.map((mood) => (
          <Card 
            key={mood.id} 
            title={mood.title}
            imageSeed={mood.imageSeed}
            onClick={() => onSelectMood(mood.id)}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-6">Need a Personal Recommendation?</h2>
          <button
            onClick={onGoToChat}
            className="w-full sm:w-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 text-lg flex items-center justify-center gap-2 mx-auto shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Chat with our Beverage Assistant
        </button>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-6">Or, Explore All Drinks</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <button 
              onClick={() => onSelectExplore('non-alcoholic')}
              className="w-full sm:w-auto bg-base-200 text-slate-200 font-bold py-3 px-8 rounded-full hover:bg-base-300 hover:text-white transition-colors duration-300 text-lg"
            >
              Non-Alcoholic Drinks
            </button>
            <button 
              onClick={() => onSelectExplore('indie')}
              className="w-full sm:w-auto bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors duration-300 text-lg"
            >
              Indie Drinks
            </button>
            {isOfAge && (
               <button 
                  onClick={() => onSelectExplore('alcoholic')}
                  className="w-full sm:w-auto bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 text-lg"
                >
                  Alcoholic Drinks
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default MoodCategories;