
import React from 'react';
import { EMAIL_ADDRESS, SOCIAL_LINKS } from '../constants';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Let's Connect!" className="bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate-600 mb-8">
          Feel free to contact me for any matter, and I'm committed to contributing in my own capacity. Moreover, my inbox is open for discussing exciting hikes, engaging in fun activities, or even just exchanging a friendly hello!
        </p>
        
        <Button 
          asLink 
          href={`mailto:${EMAIL_ADDRESS}`}
          variant="primary"
          size="lg"
          className="mb-8"
        >
          Drop me an Email
        </Button>

        <div className="flex justify-center space-x-6 mb-10">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Anuj Shah on ${link.name}`}
              className="text-slate-500 hover:text-blue-600 transition-colors duration-200"
            >
              {/* FIX: Cast link.icon to React.ReactElement<{ className?: string }> to inform TypeScript
                  that the element being cloned accepts a className prop. */}
              {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;