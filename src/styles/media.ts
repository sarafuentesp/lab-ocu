import { css } from '@emotion/core'
import { breakpoints } from './breakpoints'

const mobileFirstMedia = (label, args) => css`
  @media (min-width: ${breakpoints[label] / 16}em) {
    ${css(...args)}
  }
`

interface Media {
  extraLarge
  large
  medium
  small
  extraSmall
}

// https://www.styled-components.com/docs/advanced#media-templates
export const media: Media = Object.keys(breakpoints).reduce(
  (acc, label) => {
    acc[label] = (...args) => mobileFirstMedia(label, args)
    return acc
  },
  {
    extraLarge: '',
    large: '',
    medium: '',
    small: '',
    extraSmall: '',
  }
)
