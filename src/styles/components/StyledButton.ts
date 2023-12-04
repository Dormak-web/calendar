import {styled} from "styles/stitches.config";

export const StyledButton = styled('button', {
  // padding: '$2',
  border: 'none',
  borderRadius: 5,
//
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  color: '#111827',
  fontSize: '.875rem',
  fontWeight: '600',
  lineHeight: '1.25rem',
  padding: '$2 $3',
  textAlign: 'center',
  textDecoration: 'none #D1D5DB solid',
  textDecorationThickness: 'auto',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  userSelect: 'none',
  // -webkit-user-select: none;
  touchAction: 'manipulation',

  '&:hover': {
    backgroundColor: '$gray100',
  },

  '&:focus': {
    outline: '2px solid transparent',
    outlineOffset: 2,
  },

  '&:focus-visible': {
    boxShadow: 'none',
  },

  '&:disabled': {
    backgroundColor: '$gray400',
    cursor: 'default'
  },

  variants: {
    size: {
      small: {
        padding: '$1 $2',
      }
    },
  }

})
