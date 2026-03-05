import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/copyToClipboard';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-slate-700 overflow-hidden">
      <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white hover:bg-slate-700"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400 mr-2" />
          ) : (
            <Copy className="h-4 w-4 mr-2" />
          )}
          Copy
        </Button>
      </div>
      <div className="bg-slate-900 p-6">
        <pre className="m-0 p-0">
          <code className="text-sm font-mono text-slate-100 leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;