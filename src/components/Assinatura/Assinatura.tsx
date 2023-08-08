import { IAssinatura } from "@/types";

export const Assinatura = ({ assinatura }: IAssinatura): React.ReactElement => {
  return (
    <div className="border-t-2 py-2 font-mono">
      <div dangerouslySetInnerHTML={{ __html: assinatura }} />
    </div>
  );
};
