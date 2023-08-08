import { APP_ROUTES } from "@/constants/app-routes";

/**
 *
 * @param asPath string
 * @returns boolean
 */
export const checkIsPublicRoutes = (asPath: string) => {
  const publicRoutes = Object.values(APP_ROUTES.public);
  if (asPath.split("/").length > 2) {
    return publicRoutes.includes(`/${asPath.split("/")[1]}`);
  }

  return publicRoutes.includes(asPath);
};
