import {styled} from "styles/stitches.config";

export const StyledTagListItem = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: 5,
  padding: '$2',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '& .name': {
    gridColumnStart: 1,
    gridColumnEnd: 3,
  }
})

export const StyledTagListItemRow = styled('div', {
  display: 'flex',
  gap: '$2'
})

export const StyledTagListItemActions = styled('div', {
  width: '35%',
  display: 'flex',
  alignItems: 'end',
  gap: '$2'
})


