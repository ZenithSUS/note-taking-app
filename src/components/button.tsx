import '../tailwind.css';

type ButtonProp = {
    text: string,
}

export function Button({ text }: ButtonProp) {
    return (
        <button className="bg-blue-900 p-4 rounded-2xl text-white hover:bg-blue-700 cursor-pointer w-fit">
            {text}
        </button>
    );
}