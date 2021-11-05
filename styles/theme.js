import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body, #root': {
        height: '100%',
        bg: 'gray.50'
      }
    })
  },
  colors: {
    brand: {
      100: '#D9E0F9',
      200: '#B4C2F4',
      300: '#8899DE',
      400: '#6173BE',
      500: '#344494',
      600: '#26337F',
      700: '#1A246A',
      800: '#101855',
      900: '#090F47'
    },
    success: {
      100: '#E8FCD8',
      200: '#CDF9B2',
      300: '#A8EF89',
      400: '#83E068',
      500: '#50CC3B',
      600: '#33AF2B',
      700: '#1D921F',
      800: '#12761B',
      900: '#0B6119'
    },
    info: {
      100: '#D5E5FE',
      200: '#ADC9FD',
      300: '#83A9FA',
      400: '#638EF5',
      500: '#3264EF',
      600: '#244CCD',
      700: '#1938AC',
      800: '#0F268A',
      900: '#091972'
    },
    warning: {
      100: '#FFF6D7',
      200: '#FFEBB0',
      300: '#FFDE88',
      400: '#FFD06B',
      500: '#FFBA3A',
      600: '#DB962A',
      700: '#B7761D',
      800: '#935812',
      900: '#7A430B'
    },
    danger: {
      100: '#FFE6D6',
      200: '#FFC7AD',
      300: '#FFA283',
      400: '#FF7E65',
      500: '#FF4332',
      600: '#DB2424',
      700: '#B71926',
      800: '#930F25',
      900: '#7A0925'
    }
  }
})

export default theme
