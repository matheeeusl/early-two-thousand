import { store } from "@/store";

const DevRoom = (): React.ReactElement => {
  const { registros } = store.getState().registro;

  return (
    <div className="w-full bg-gray-200">
      <h1>Essa rota deveria ser privada!</h1>
    </div>
  );
};

export default DevRoom;
