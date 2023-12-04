import {styled} from "styles/stitches.config";

export const StyledTextField = styled('div', {
  display: 'flex'

})

export const StyledTextFieldInput = styled('input', {
  width: '100%',
  border: '1px solid #cccccc',
  height: 36,
  borderRadius: 4,
  padding: '0 $2',

  '&:focus': {
    outlineColor: '#2684FF'
  }
})
