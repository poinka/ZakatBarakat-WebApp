import React from 'react';

interface CardComponentProps {
  body: string;
}

const EducationalCard: React.FC<CardComponentProps> = ({ body }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4 max-w-md aspect-square mx-auto mt-6" style={{borderRadius: "15px"}}>
      <p className="list-disc space-y-2 px-6 text-gray-700">
        {body}
      </p>
    </div>
  );
};

export default EducationalCard