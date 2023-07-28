"use client";

import { keyboardKeys, useKeybindings } from "@/hooks";
import { useState } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Menu } from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "Haunt Seekers 2000",
  description:
    "Criado pelo desespero, mantido pela esperança. Caçadores de assombrações, unam-se!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secrectSite, setSecretSite] = useState(false);
  const { KeyJ, KeyL, KeyZ } = keyboardKeys;
  const handleShortcut = () => {
    console.log("Secret site unlocked!");
    setSecretSite(true);
  };

  useKeybindings([
    {
      cmd: [KeyJ, KeyL, KeyZ],
      callback: handleShortcut,
    },
  ]);
  return (
    <html lang="en">
      <body className={secrectSite ? "bg-eyes" : "bg-stars"}>
        <Header secret={secrectSite} />
        <Menu />
        <main>
          <div id="container" className="flex justify-center">
            <div id="container-inner" className="flex max-w-7xl w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
