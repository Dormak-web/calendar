import {styled} from "styles/stitches.config";

export const StyledModal = styled('div', {
  display: 'none',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    show: {
      true: {
        display: 'flex'
      }
    }
  },
})
