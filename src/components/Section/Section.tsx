export const Section = ({
  title,
  styles,
  children,
  categories = false,
}: {
  title: string;
  styles?: string;
  children?: React.ReactNode;
  categories?: boolean;
}) => {
  return (
    <div className={`${styles} w-full border-gray-800`}>
      <div className="bg-red-800">
        <p className="text-white pl-1">{title}</p>
      </div>
      {categories && (
        <div className="grid grid-cols-12 bg-slate-200">
          <div className="text-xs text-center">-</div>
          <div className="text-xs col-span-8 pl-1">Título</div>
          <div className="text-xs pl-1">Respostas</div>
          <div className="text-xs pl-1 col-span-2">Autor</div>
        </div>
      )}
      <div className="bg-white">{children}</div>
    </div>
  );
};
