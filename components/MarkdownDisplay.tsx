import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownDisplay({ text }: {text: string}) {
  return (
    <div className="">
      <ReactMarkdown remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mb-3" {...props} />,
        p: ({ node, ...props }) => <p className="mb-2 " {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-3" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-3" {...props} />,
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
        code: ({ node, ...props }) => <code className="bg-gray-200 p-1 rounded" {...props} />,
        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />,
        hr: ({ node, ...props }) => <hr className="my-4" {...props} />,
      }}>
        {text}
      </ReactMarkdown>
    </div>
  );
}