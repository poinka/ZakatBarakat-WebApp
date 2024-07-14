import React from 'react';

interface CardComponentProps {
  body: string;
}

const EducationalCard: React.FC<CardComponentProps> = ({ body }) => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md space-y-4 max-w-md mx-auto mt-6">
      {/* <h2 className="text-xl font-semibold text-center">{title}</h2> */}
      <p className="list-disc space-y-2 px-6 text-gray-700">
        {body}
      </p>
    </div>
  );
};

export default EducationalCard