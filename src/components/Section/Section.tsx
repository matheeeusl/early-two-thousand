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
        <div className="flex bg-slate-200">
          <div className="text-xs pr-1 text-center min-w-50">-</div>
          <div className="text-xs w-full pl-1">Título</div>
          <div className="text-xs px-1 min-w-70 text-center">Respostas</div>
          <div className="text-xs px-1 min-w-70 text-center">Autor</div>
        </div>
      )}
      <div className="bg-white">{children}</div>
    </div>
  );
};
