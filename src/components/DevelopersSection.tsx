import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const developers = [
  { name: "Unnamed0a0", role: "Lead Developer" },
  { name: "Денька", role: "Core Developer" },
  { name: "Likuur", role: "Core Developer" },
];

const DevelopersSection = () => {
  return (
    <div className="mb-16 animate-slide-up">
      <h2 className="text-2xl md:text-3xl font-pixel text-launcher-100 text-center mb-8">
        Наша команда
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {developers.map((dev, index) => (
          <Card 
            key={index}
            className="bg-launcher-800/30 border-launcher-700 hover:bg-launcher-800/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-launcher-100" />
              </div>
              <CardTitle className="text-center font-pixel text-launcher-100 text-lg">
                {dev.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-launcher-200 text-center">{dev.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DevelopersSection;