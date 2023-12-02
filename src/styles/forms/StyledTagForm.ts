import {styled} from "styles/stitches.config";

export const StyledTagForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const StyledTagFormInputs = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2'
})

export const StyledTagFormTagList = styled('div', {
  backgroundColor: '#fff',
  width: '100%',
  minHeight: 80,
  padding: '$3',
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})



