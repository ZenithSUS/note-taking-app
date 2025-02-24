import "../tailwind.css";

type ButtonProp = {
  text: string;
  onClick: (event: React.FormEvent) => void;
};

export function Button({ text, onClick }: ButtonProp) {
  return (
    <button
      className="bg-blue-900 py-3.5 px-6 rounded-2xl text-white hover:bg-blue-700 cursor-pointer w-fit"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
