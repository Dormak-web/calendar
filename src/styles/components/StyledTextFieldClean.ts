import {styled} from "styles/stitches.config";

export const StyledTextFieldClean = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',

  '&:focus': {
    outline: 'none',
  }
})
