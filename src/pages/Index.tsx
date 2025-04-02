
import React from 'react';
import ComplimentGenerator from '@/components/ComplimentGenerator';
import ExoticBackground from '@/components/ExoticBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10">
      <ExoticBackground />
      <ComplimentGenerator />
    </div>
  );
};

export default Index;
