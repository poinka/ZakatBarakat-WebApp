import MarkdownDisplay from "./MarkdownDisplay";

interface CardComponentProps {
  body: string;
}

const EducationalCard: React.FC<CardComponentProps> = ({ body }) => {
  return (
    <div className="p-6 pt-8 bg-white rounded-lg shadow-md space-y-4 max-w-md mx-auto mt-6 w-3/4" style={{borderRadius: "15px"}}>
      <div style={{ whiteSpace: 'pre-wrap', color: " #1D411D" }} className="space-y-2 px-6 ">
        <MarkdownDisplay text={body} >
        </MarkdownDisplay>
      </div>
    </div>
  );
};

export default EducationalCard