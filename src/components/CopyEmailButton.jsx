import { useState } from "react";

const CopyEmailButton = ({ email = "mananpdesai1783@gmail.com" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
    >
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
};

export default CopyEmailButton;

