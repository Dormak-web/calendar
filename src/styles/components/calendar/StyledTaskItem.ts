import {styled} from "styles/stitches.config";

export const StyledTaskItem = styled('div', {
  minHeight: 20,

  backgroundColor: '#fff',
  padding: '$2',
  margin: '$1',
  borderRadius: 5,

  '& .actions': {
    display: 'flex',
    alignItems: 'start',
    gap: '$2',
  }
})
