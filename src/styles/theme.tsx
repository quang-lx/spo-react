import {mergeThemes, teamsTheme} from '@fluentui/react-northstar';

/*
* 1rem = 1em * 0.625 = 16px * 0.625 = 10px (1em tính theo font-size của parent gần nhất hoặc current element)
* mặc định với thẻ <html> 1em = 16px
*/

export const appTheme = {
  siteVariables: {
    colors: {
      brand: {
        "50": "#EFF6FC",
        "100": "#EFF6FC",
        "200": "#DEECF9",
        "300": "#C7E0F4",
        "400": "#71AFE5",
        "450": "#71AFE5",
        "500": "#2B88D8",
        "600": "#0078D4",
        "700": "#106EBE",
        "800": "#005A9E",
        "900": "#004578",
        "1000": "#004578"
      }
    },
    headerHeight: "3rem",
    menuWidth: "3rem",
    subMenuWidth: "33.4375rem",
    smallSubMenuWidth: "13.375rem",
    bigSubMenuWidth: "20rem",
    profilePopupWidth: "20rem",
    toolbarHeight: "2.75rem",
    profileBlockMinWidth: "24rem",
    rightBarWidth: "13.375rem",
    commentLeftColumnWidth: "2.5rem",
    menuBackgroundColor: "#f0f0f0",
    secondaryColor: "#616161",
    subMenuBackgroundColor: "#ffffff",
    bigSubMenuItemHoveredBackgroundColor: "#f5f5f5",
    blackColor: "#201f1e",
    commentReplyBackgroundColor: "#fafafa",
    mentionHoveredBackground: "#ebebeb"
  }
}

export const customTeamsTheme = {
  siteVariables: {
    bodyColor: "#616161",
    contextualColors: {
      brand: {
        "50": "#EFF6FC",
        "100": "#EFF6FC",
        "200": "#DEECF9",
        "300": "#C7E0F4",
        "400": "#71AFE5",
        "450": "#71AFE5",
        "500": "#2B88D8",
        "600": "#0078d4",
        "700": "#106EBE",
        "800": "#005A9E",
        "900": "#004578",
        "1000": "#004578"
      }
    },
    colorScheme: {
      brand: {
        foreground: appTheme.siteVariables.colors.brand[600],
        background: appTheme.siteVariables.colors.brand[600],
        foregroundHover: appTheme.siteVariables.colors.brand[600],
        backgroundHover: appTheme.siteVariables.colors.brand[800],
        foreground1: appTheme.siteVariables.colors.brand[600],
        background6: appTheme.siteVariables.colors.brand[300],
        backgroundHover1: appTheme.siteVariables.colors.brand[300],
      },
      default: {
        backgroundActive1: appTheme.siteVariables.colors.brand[300],
      }
    }
  },
  componentVariables: {
    Menu: {
      color: appTheme.siteVariables.secondaryColor,
      colorHover: appTheme.siteVariables.colors.brand[600]
    }
  },
  componentStyles: {}
}

export const theme = mergeThemes(teamsTheme, customTeamsTheme, appTheme)

export type ThemeType = typeof theme;