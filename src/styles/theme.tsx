

/*
* 1rem = 1em * 0.625 = 16px * 0.625 = 10px (1em tính theo font-size của parent gần nhất hoặc current element)
* mặc định với thẻ <html> 1em = 16px
*/

export const appTheme = {
  headerHeight: "3rem",
  menuWidth: "4.25rem",
  subMenuWidth: "20rem",
  profilePopupWidth: "18rem",
  mainColor: "#DA2128",
  mainColorHovered: "#c01f23",
  menuBackgroundColor: "#ebebeb",
  secondaryColor: "#616161",
  subMenuBackgroundColor: "#f0f0f0",
  mainContainerBackgroundColor: "#f5f5f5"
}

export const customTeamsTheme = {
  siteVariables: {
    colors: {
      brand: {
       "600":  appTheme.mainColor
      }
    },
    contextualColors: {
      brand: {
        "600":  appTheme.mainColor
      }
    },
    colorScheme: {
      foreground: appTheme.mainColor,
      background: appTheme.mainColor,
      foregroundHover: appTheme.mainColor,
      foregroundActive: appTheme.mainColor,
      backgroundActive: appTheme.mainColor,
      foreground1: appTheme.mainColor,
      background6: appTheme.mainColor,
      foregroundActive1: appTheme.mainColor,
      backgroundActive1: appTheme.mainColor,
      foregroundFocus1: appTheme.mainColor,
      borderFocus1: appTheme.mainColor,
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