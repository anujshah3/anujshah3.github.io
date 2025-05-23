
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { ExperienceItem } from '../types';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <Card className="mb-8 flex flex-col md:flex-row items-start gap-6">
    {item.logoUrl && (
      <img 
        src={item.logoUrl} 
        alt={`${item.company} logo`} 
        className="w-16 h-16 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
        onError={(e) => (e.currentTarget.style.display = 'none')} // Hide if logo fails to load
      />
    )}
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
      <p className="text-emerald-600 font-medium">{item.company}</p>
      <p className="text-sm text-slate-500 mb-3">{item.date}</p>
      <ul className="list-disc list-inside space-y-1.5 text-slate-600">
        {item.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  </Card>
);

const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience" className="bg-slate-100">
      <div className="space-y-12">
        {EXPERIENCE_DATA.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;