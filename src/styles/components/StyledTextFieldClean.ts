import {styled} from "styles/stitches.config";

export const StyledTextFieldClean = styled('textarea', {
  width: '100%',
  height: '100%',
  border: 'none',
  resize: 'none',
  overflowY: 'hidden',

  '&:focus': {
    outline: 'none',
  }
})
