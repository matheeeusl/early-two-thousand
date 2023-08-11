import { DEV_ROOM } from "@/constants/dev-room";
import { Md5 } from "ts-md5";
import { getLocalStorage } from "./get-local-storage";

/**
 * Check if user is authenticated
 */
export const checkIsAuthenticated = (): boolean => {
  const token = getLocalStorage("super-token");
  if (!token) return false;
  const encrypt = Md5.hashStr(DEV_ROOM.password + DEV_ROOM.salt);
  if (token !== encrypt) return false;
  return true;
};
