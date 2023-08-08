"use client";

import { keyboardKeys, useKeybindings } from "@/hooks";
import { useState } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Menu } from "@/components/Menu/Menu";
import { usePathname } from "next/navigation";
import { checkIsPublicRoutes } from "@/functions/check-is-public-route";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublic = checkIsPublicRoutes(pathname!);

  console.log("isPublic", isPublic);

  const [secrectSite, setSecretSite] = useState(false);
  const { KeyH, KeyE, KeyL, KeyP } = keyboardKeys;
  const handleShortcut = () => {
    setSecretSite(true);
  };

  useKeybindings([
    {
      cmd: [KeyH, KeyE, KeyL, KeyP],
      callback: handleShortcut,
    },
  ]);
  return (
    <html lang="en">
      <body className={secrectSite ? "bg-eyes cursor-cell" : "bg-stars"}>
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
