

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
  toolbarHeight: "2.75rem",
  profileBlockMinWidth: "24rem",
  mainColor: "#0078d4",
  mainColorHovered: "#005a9e",
  headerBackgroundColor: "#0078d4",
  headerItemHoveredBackgroundColor: "#005a9e",
  menuBackgroundColor: "#f0f0f0",
  secondaryColor: "#616161",
  subMenuBackgroundColor: "#ffffff",
  smallSubMenuBackgroundColor: "#f3f2f1",
  subMenuToolbarBackgroundColor: "#f3f2f1",
  containerToolbarBackgroundColor: "#f3f2f1",
  mainContainerBackgroundColor: "#faf9f8",
  borderColor: "#edebe9",
  smallSubMenuItemHoveredBackgroundColor: "#c7e0f4",
  smallSubMenuItemHoveredTextColor: "#005a9e",
  bigSubMenuItemActiveBackgroundColor: "#c7e0f4",
  bigSubMenuItemHoveredBackgroundColor: "#f5f5f5",
  blackColor: "#201f1e"
}

export const customTeamsTheme = {
  siteVariables: {
    bodyColor: "#616161",
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
      brand: {
        foreground: appTheme.mainColor,
        background: appTheme.mainColor,
        foregroundHover: appTheme.mainColor,
        backgroundHover: appTheme.mainColorHovered,
        foreground1: appTheme.mainColor
      },
      default: {
        backgroundActive1: appTheme.bigSubMenuItemActiveBackgroundColor
      }
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