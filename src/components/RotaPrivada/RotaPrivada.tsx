import { checkIsAuthenticated } from "@/functions/check-is-authenticated";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export const RotaPrivada = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const isAuthenticated = checkIsAuthenticated();
  useEffect(() => {
    if (!isAuthenticated) {
      push("/");
    }
  }, [isAuthenticated, push]);

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  );
};
