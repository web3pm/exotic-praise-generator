
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Copy, RefreshCw, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getRandomCompliment, getRandomCategory } from '@/data/compliments';

const ComplimentGenerator: React.FC = () => {
  const [compliment, setCompliment] = useState("");
  const [category, setCategory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    generateCompliment();
  }, []);

  const generateCompliment = () => {
    setIsGenerating(true);
    
    // Small delay for animation effect
    setTimeout(() => {
      setCompliment(getRandomCompliment());
      setCategory(getRandomCategory());
      setIsGenerating(false);
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(compliment);
    toast({
      title: "Copied to clipboard",
      description: "The exotic compliment is now yours to share!",
      variant: "default",
    });
  };
  
  const shareCompliment = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Exotic Compliment',
        text: compliment,
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold shimmer-text mb-4">
          Exotic Praise
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Discover compliments as rare and magnificent as you are
        </p>
      </div>

      <Card className="exotic-card border-none shadow-xl backdrop-blur-lg overflow-hidden">
        <CardContent className="p-8">
          <div className="mb-2 flex items-center justify-center">
            <span className="px-3 py-1 rounded-full bg-exotic-purple/20 text-xs font-medium text-exotic-purple inline-flex items-center gap-1">
              <Sparkles size={12} />
              {category || "Exotic Praise"}
            </span>
          </div>
          
          <div className={`relative min-h-[150px] flex items-center justify-center transition-opacity duration-500 ${isGenerating ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-2xl md:text-3xl text-center font-serif leading-relaxed">
              {compliment || "Your journey into exotic praise is about to begin..."}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button 
              onClick={generateCompliment}
              className="exotic-button gap-2" 
              disabled={isGenerating}
            >
              <RefreshCw size={18} className={`${isGenerating ? 'animate-spin' : ''}`} />
              New Compliment
            </Button>
            
            <Button
              variant="outline"
              onClick={copyToClipboard}
              className="border-exotic-purple/30 hover:border-exotic-purple/60 gap-2 hover:bg-exotic-purple/10"
            >
              <Copy size={18} />
              Copy
            </Button>
            
            <Button
              variant="outline"
              onClick={shareCompliment}
              className="border-exotic-teal/30 hover:border-exotic-teal/60 gap-2 hover:bg-exotic-teal/10"
            >
              <Share2 size={18} />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Brighten someone's day with these extraordinary compliments</p>
      </div>
    </div>
  );
};

export default ComplimentGenerator;
