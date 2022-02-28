

/*
* 1rem = 1em * 0.625 = 16px * 0.625 = 10px (1em tính theo font-size của parent gần nhất hoặc current element)
* mặc định với thẻ <html> 1em = 16px
*/

export const appTheme = {
  headerHeight: "3rem",
  menuWidth: "3rem",
  subMenuWidth: "33.4375rem",
  smallSubMenuWidth: "13.375rem",
  bigSubMenuWidth: "20rem",
  profilePopupWidth: "20rem",
  buttonsBlockHeight: "2.75rem",
  mainColor: "#DA2128",
  mainColorHovered: "#c01f23",
  menuBackgroundColor: "#f0f0f0",
  secondaryColor: "#616161",
  subMenuBackgroundColor: "#ffffff",
  smallSubMenuBackgroundColor: "#f3f2f1",
  subMenuButtonsBlockBackgroundColor: "#f3f2f1",
  mainContainerBackgroundColor: "#faf9f8",
  borderColor: "#edebe9"
}

export const customTeamsTheme = {
  siteVariables: {
    colors: {
      brand: {
       "600":  appTheme.mainColor
      }
    },
    contextualColors: {
      // brand: {
      //   "600":  appTheme.mainColor
      // }
    },
    colorScheme: {
      brand: {
        foreground: appTheme.mainColor,
        background: appTheme.mainColor,
        foregroundHover: appTheme.mainColor,
        backgroundHover: appTheme.mainColorHovered,
      }
      // foreground: appTheme.mainColor,
      // background: appTheme.mainColor,
      // foregroundHover: appTheme.mainColor,
      // foregroundActive: appTheme.mainColor,
      // backgroundActive: appTheme.mainColor,
      // foreground1: appTheme.mainColor,
      // background6: appTheme.mainColor,
      // foregroundActive1: appTheme.mainColor,
      // backgroundActive1: appTheme.mainColor,
      // foregroundFocus1: appTheme.mainColor,
      // borderFocus1: appTheme.mainColor,
    }
  },
  componentVariables: {
    Menu: {
      color: appTheme.secondaryColor,
      colorHover: appTheme.mainColor
    }
  },
  componentStyles: {

  }
}

export type ThemeType = typeof appTheme;