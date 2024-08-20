import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/hooks";
import { AuthNavigator } from "./auth/Auth.navigator";
import { GuestNavigator } from "./guest/Guest.navigator";
import { createAxiosInstance } from "../api/axios";
import i18n from "../languages/i18n";
import { changeDirection } from "../theme/globalStyles";

/**
 * Mobile Navigator ( Stack )
 * |
 * |_ Stack Navigator ( Guest Navigator )
 * | /auth  ( UnAuthorized Navigator )
 * | |____ login ( email | password )
 * | |____ regiser
 * | |____ forget ( change | password )
 * |
 * |_ Tab navigator ( Authorized )
 * | |____ Screen 1
 * | |____ Screen 2
 * | |____ Screen 3
 * | |____ Screen 4
 * | |____ Screen 5
 *
 */

export function MobileNavigator() {
  /** State by redux
   * Change isAuth to true or false
   **/

  const { isAuth, accessToken } = useAppSelector((state) => state.auth);
  const currentLanguage = useAppSelector(
    (state) => state.localization.currentLanguage
  );

  useEffect(() => {
    createAxiosInstance(accessToken);
    i18n.changeLanguage(currentLanguage);
  }, [accessToken, currentLanguage]);

  return isAuth ? <AuthNavigator /> : <GuestNavigator />;
}
