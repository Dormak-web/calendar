import {styled} from "styles/stitches.config";

export const StyledTaskItemTags = styled('div', {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$1',
  marginBottom: '$2',
  minHeight: 8,
})

export const StyledTaskItemTag = styled('div', {
  padding: '$1 $2',
  minWidth: 15,
  backgroundColor: '$gray100',
  borderRadius: 9999,
})


