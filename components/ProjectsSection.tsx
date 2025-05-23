
import React from 'react';
import { PROJECT_DATA, MORE_PROJECTS_LINK, ExternalLinkIcon } from '../constants';
import { ProjectItem } from '../types';
import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import Button from './ui/Button';

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <Card className="flex flex-col h-full">
    {item.imageUrl && (
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-48 object-cover rounded-t-lg mb-4"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://picsum.photos/seed/fallback/400/300';
        }}
      />
    )}
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
      <p className="text-slate-600 mb-3 text-sm flex-grow">{item.description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <span key={tech} className="bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-auto pt-4 border-t border-slate-200 flex space-x-2">
      {item.liveLink && (
        <Button asLink href={item.liveLink} target="_blank" rel="noopener noreferrer" size="sm" variant="primary" className="flex-1">
          Live Demo <ExternalLinkIcon />
        </Button>
      )}
      {item.repoLink && (
        <Button asLink href={item.repoLink} target="_blank" rel="noopener noreferrer" size="sm" variant="outline" className="flex-1">
          View Code <GitHubIcon className="w-4 h-4 ml-1.5" />
        </Button>
      )}
    </div>
  </Card>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className={className || "w-4 h-4"}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);


const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" className="bg-slate-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECT_DATA.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button 
          asLink 
          href={MORE_PROJECTS_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="primary"
          size="lg"
        >
          More Projects on GitHub <ExternalLinkIcon className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;