import React from 'react';
import LanguaguesButton from './LanguaguesButton';
import LearningButton from './LearningButton';
const Buttons = () => {
  return (
    <div className="text-[18px] space-x-3 flex flex-row">
      <LanguaguesButton />
      <LearningButton />
    </div>
  );
};

export default Buttons;
