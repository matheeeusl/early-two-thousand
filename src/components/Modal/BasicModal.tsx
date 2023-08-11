import { DEV_ROOM } from "@/constants/dev-room";
import { IBasicModal } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MultiInput } from "@/components/MultiInput/MultiInput";
import { saveLocalStorage } from "@/functions/save-local-storage";
import { Md5 } from "ts-md5";
import { useRouter } from "next/navigation";

export const BasicModal = ({
  onClose,
  show,
}: IBasicModal): React.ReactElement => {
  const [sound, setSound] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [permission, setPermission] = useState(false);
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  const toggleAudio = () => {
    const video = document.querySelector("video");
    if (video) {
      video.muted = !video.muted;
      setSound(!video.muted);
    }
  };

  const exitModal = () => {
    toggleAudio();
    onClose();
  };

  useEffect(() => {
    if (show) {
      toggleAudio();
    }
  }, [show]);

  const verifyPassword = (pass: string) => {
    if (pass.toLowerCase() === DEV_ROOM.password.toLowerCase()) {
      setPermission(true);
      const encrypt = Md5.hashStr(DEV_ROOM.password + DEV_ROOM.salt);
      saveLocalStorage("super-token", encrypt);
      return true;
    }
    return false;
  };

  const onClick = () => {
    if (permission) {
      exitModal();
    }
    const allowed = verifyPassword(password);
    if (allowed) {
      exitModal();
      push("/dev-room");
    }
  };
  useEffect(() => {
    if (navigator.permissions) {
      const permissionName = "camera" as PermissionName;
      navigator.permissions.query({ name: permissionName }).then((result) => {
        if (result.state === "granted") {
          setVideoAvailable(true);
        }
      });
    }
  }, []);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="">
                <div className="flex justify-center items-start h-120 w-full">
                  <video id="video" height={120} width={160} autoPlay />
                  <button onClick={toggleAudio}>
                    <div className="absolute right-7 top-6">
                      {sound ? (
                        <Image
                          src={"/icons/sound-on.svg"}
                          height={20}
                          width={20}
                          alt="sound on"
                        />
                      ) : (
                        <Image
                          src={"/icons/sound-off.svg"}
                          height={20}
                          width={20}
                          alt="sound off"
                        />
                      )}
                    </div>
                  </button>
                </div>
                <div className="mt-6 text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {videoAvailable ? "Estou de olho!" : "Preciso te assistir!"}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Só aqueles com o conhecimento e a quem eu possa ver podem
                      ter acesso a ajuda do Dev Room.
                    </p>

                    {!videoAvailable && (
                      <p className="text-xs">
                        <b>Obs:</b> Você não aceitou a permissão de vídeo, mude
                        nas configurações do seu navegador, e acesse a essa tela
                        novamente, para acessar ao input de senha de acesso.
                      </p>
                    )}
                  </div>
                  {videoAvailable && (
                    <div className="mt-2 flex items-center justify-center">
                      <MultiInput
                        length={DEV_ROOM.password.length}
                        onComplete={(password) => setPassword(password)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={exitModal}
              >
                Sair
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ml-3 w-auto"
                disabled={!videoAvailable}
                onClick={onClick}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
