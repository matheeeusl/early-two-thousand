export const Assinatura = ({
  assinatura,
}: {
  assinatura: string;
}): React.ReactElement => {
  return (
    <div className="border-t w-100 border-black mt-2 py-2 px-4">
      <div dangerouslySetInnerHTML={{ __html: assinatura }} />
    </div>
  );
};
