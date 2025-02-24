import "../tailwind.css";

type MainProps = {
  children: React.ReactNode;
};

export const MainWrapper: React.FC<MainProps> = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col gap-2 mt-20 w-full">
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MainWrapper;
