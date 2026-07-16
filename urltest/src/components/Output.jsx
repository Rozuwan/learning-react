import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Output = () => {
  const [copied, setCopied] = useState(false);
  const [shortedLink, setShortedLink] = useState("Roshan");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortedLink);
      setCopied(true);
      toast.success("Copied url successfully!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="relative flex items-center justify-center gap-10 mt-10  ">
        <div className="flex gap-10 items-center bg-amber-100 py-2 px-4 rounded-2xl">
          <p>{shortedLink}</p>

          <button
            onClick={handleCopy}
            className="bg-black border-2 border-black text-white rounded-full py-2 px-3 active:scale-95"
          >
            Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Output;
