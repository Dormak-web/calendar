import {styled} from "styles/stitches.config";

export const StyledSidebar = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: 0,
  marginLeft: '$1',

  variants: {
    open: {
      true: {
        width: 300
      }
    }
  }
})

export const StyledSidebarHead = styled('div', {
  height: 50,
  padding: '$3 $3',
  marginTop: 30,

  borderBottom: '2px solid $divider',
  backgroundColor: '$gray200',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})


export const StyledSidebarContent = styled('div', {
  height: '100%',
  backgroundColor: '$gray200',
  padding: '$3 $3',
})

export const StyledSidebarActions = styled('div', {
  padding: '$3 $3',
  backgroundColor: '$gray200',
  borderTop: '2px solid $divider',

})





