"use client";

import { keyboardKeys, useKeybindings } from "@/hooks";
import { useEffect, useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Menu } from "@/components/Menu/Menu";
import { usePathname } from "next/navigation";
import { checkIsPublicRoutes } from "@/functions/check-is-public-route";
import { BasicModal } from "@/components/Modal/BasicModal";
import { checkIsAuthenticated } from "@/functions/check-is-authenticated";
import { RotaPrivada } from "@/components/RotaPrivada/RotaPrivada";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublic = checkIsPublicRoutes(pathname!);
  const isAuth = checkIsAuthenticated();

  const [secrectSite, setSecretSite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { KeyH, KeyE, KeyL, KeyP } = keyboardKeys;
  const handleShortcut = () => {
    setSecretSite(true);
    setShowModal(true);
  };

  useKeybindings([
    {
      cmd: [KeyH, KeyE, KeyL, KeyP],
      callback: handleShortcut,
    },
  ]);
  useEffect(() => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia !== null
    ) {
      const options = {
        audio: true,
        video: true,
      };
      navigator.mediaDevices
        .getUserMedia(options)
        .then(function (stream) {
          const video = document.querySelector("video");
          if (video) {
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
              video.play();
              video.muted = true;
            };
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    if (isAuth) {
      setSecretSite(true);
    }
  }, [isAuth]);

  const onCloseModal = () => {
    setShowModal(false);
    if (!isAuth) {
      setSecretSite(false);
    }
  };

  return (
    <html lang="en">
      <body className={secrectSite ? "bg-eyes cursor-cell" : "bg-stars"}>
        <link rel="icon" href="/icons/ghost.svg" sizes="any" />
        <Header secret={secrectSite} />
        <Menu secret={secrectSite} />
        <main>
          <div id="container" className="flex justify-center">
            <div id="container-inner" className="flex max-w-7xl w-full">
              {isPublic && children}
              {!isPublic && <RotaPrivada>{children}</RotaPrivada>}
            </div>
          </div>
          <div className={showModal ? "block" : "hidden"}>
            <BasicModal show={showModal} onClose={onCloseModal} />
          </div>
        </main>
      </body>
    </html>
  );
}
