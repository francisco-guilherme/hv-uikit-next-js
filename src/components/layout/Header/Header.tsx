import React, { useContext, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, Menu, ThemeSwitcher } from "@hitachivantara/uikit-react-icons";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation,
  NavigationItemProp,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import HitachiLogo from "assets/HitachiLogo";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import navigation from "navigation";

const { REACT_APP_NAME } = process.env;

const Header: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const { toggleTheme } = useContext(ThemeContext);
  const { toggleVerticalOpen, activePath } = useContext(NavigationContext);

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (
    event: MouseEvent,
    selection: NavigationItemProp
  ): void => {
    if (selection.path) router.push(selection.path);
  };

  return (
    <HvHeader>
      {!isMdUp && (
        <HvButton category="ghost" icon onClick={toggleVerticalOpen}>
          <Menu />
        </HvButton>
      )}

      <HvHeaderBrand
        style={{ marginLeft: 10 }}
        logo={<HitachiLogo style={{ width: 72, height: 20 }} />}
        name={!isXs ? REACT_APP_NAME : undefined}
      />

      {isMdUp && (
        <HvHeaderNavigation
          data={navigation}
          selected={activePath?.id}
          onClick={handleChange}
        />
      )}

      {isMdUp && (
        <HvHeaderActions>
          <HvButton
            icon
            aria-label="Change theme"
            onClick={() => toggleTheme()}
          >
            <ThemeSwitcher />
          </HvButton>
          <HvButton icon onClick={() => {}} aria-label="Logout">
            <LogOut />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
};

export default Header;
