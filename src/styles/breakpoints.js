export const sizes = {
  mobile: {
    sm: '360px',
    lg: '576px',
  },
  tablet: {
    sm: '768px',
    lg: '1024px',
  },
  desktop: {
    sm: '1280px',
    lg: '1440px',
  },
}

export const devicesMin = {
  mobile: {
    sm: `(min-width: ${sizes.mobile.sm})`,
    lg: `(min-width: ${sizes.mobile.lg})`,
  },
  tablet: {
    sm: `(min-width: ${sizes.tablet.sm})`,
    lg: `(min-width: ${sizes.tablet.lg})`,
  },
  desktop: {
    sm: `(min-width: ${sizes.desktop.sm})`,
    lg: `(min-width: ${sizes.desktop.lg})`,
  },
}

export const devicesMax = {
  mobile: {
    sm: `(max-width: ${sizes.mobile.sm})`,
    lg: `(max-width: ${sizes.mobile.lg})`,
  },
  tablet: {
    sm: `(max-width: ${sizes.tablet.sm})`,
    lg: `(max-width: ${sizes.tablet.lg})`,
  },
  desktop: {
    sm: `(max-width: ${sizes.desktop.sm})`,
    lg: `(max-width: ${sizes.desktop.lg})`,
  },
}
