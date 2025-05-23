
import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { ABOUT_ME_PHOTO_URL } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-white">
      <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12 max-w-4xl mx-auto">
        <div className="w-full md:w-1/3 flex-shrink-0 md:order-last">
          <img
            src={ABOUT_ME_PHOTO_URL}
            alt="Anuj Shah in a casual setting"
            className="rounded-xl shadow-lg object-cover w-full aspect-[3/4] md:aspect-auto md:max-h-[500px]"
          />
        </div>
        <div className="md:w-2/3 text-lg text-slate-700 space-y-6 leading-relaxed text-left md:text-justify">
          <p>
            I'm Anuj Shah, born and raised in Mumbai, a city of dreams. I completed my undergraduate studies in Information Technology at TSEC, Mumbai, graduating with satisfactory grades and creating wonderful memories and lifelong friendships in October 2020.
          </p>
          <p>
            Following my graduation, I joined CognoAI, where I spent a year building chatbots for the Finance industry. Seeking further knowledge and growth, I moved to DeKalb, a small town in Illinois, USA, to pursue a Master's degree in Computer Science from NIU. I successfully graduated in May 2023.
          </p>
          <p>
            During my master's program, I had the opportunity to work as a Research Assistant, contributing to the development and enhancement of reproducibility for Jupyter Notebook. Subsequently, at Verveware, where I contributed to developing a product aimed at streamlining processes in the Elderly care industry. And, at Continental, I worked on solving infrastructure issues and automating test cases.
          </p>
          <p>
            When I'm not around my laptop, you can probably find me either gardening, or hiking in the mountains else sleeping.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;