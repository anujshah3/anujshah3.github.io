
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, className, titleClassName }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {title && (
          <h2 className={`text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center ${titleClassName || ''}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;