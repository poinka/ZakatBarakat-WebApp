import React from 'react';

interface CardComponentProps {
  body: string;
}

const EducationalCard: React.FC<CardComponentProps> = ({ body }) => {
  return (
    <div className="p-6 pt-16 bg-white rounded-lg shadow-md space-y-4 max-w-md aspect-square mx-auto mt-6 w-3/4" style={{borderRadius: "15px"}}>
      <p style={{ whiteSpace: 'pre-wrap', color: " #1D411D" }} className="list-disc space-y-2 px-6 ">
        {body}
      </p>
    </div>
  );
};

export default EducationalCard