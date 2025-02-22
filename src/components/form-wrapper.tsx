import "../tailwind.css";

type FormProps = {
    children: React.ReactNode
}

export const FormWrapper: React.FC<FormProps> = ({ children }: FormProps) => {
    return (
        <div className="flex items-center justify-center h-screen w-full sm:px-6 lg:px-8">
            {children}
        </div>
    );
}