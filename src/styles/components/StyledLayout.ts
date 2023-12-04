import {styled} from "styles/stitches.config";

export const StyledLayout = styled('div', {
  width: '100%',
  height: '100vh',
  backgroundColor: '$gray100',

  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column'

  // display: 'flex',
  // gridTemplateColumns: '1fr auto',
  // gridTemplateRows: 'auto 1fr',
})

export const StyledLayoutHead = styled('div', {
  gridColumnStart: '1',
  gridColumnEnd: '3',
})

export const StyledLayoutBody = styled('div', {
  display: 'flex',
  height: '100%',

  // gridColumnStart: '1',
  // gridColumnEnd: '2',
})

export const StyledLayoutSidebar = styled('div', {
  gridColumnStart: '2',
  gridColumnEnd: '3',
})
