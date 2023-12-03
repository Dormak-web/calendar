import {styled} from "styles/stitches.config";

export const StyledMonthCalendarContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray100',
});

export const StyledMonthCalendarHeadTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 40px',

  '& .actions': {
    display: 'flex',
    gap: '$1'
  }
})

export const StyledChangeMonthActions = styled('div', {
  marginLeft: '$2',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})


export const StyledMonthCalendarHead = styled('div', {
  backgroundColor: '$gray100',
});

export const StyledMonthCalendarHeadRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  //   @todo add grid-template-columns: repeat(7, 1fr);
});

export const StyledMonthCalendarHeadCell = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '$3',
});

export const StyledMonthCalendarBody = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  overflow: 'hidden',
});

export const StyledMonthCalendarBodyRow = styled('div', {
  height: '20%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gap: '$1',
});

export const StyledMonthCalendarBodyCell = styled('div', {
  backgroundColor: '$gray200',
  padding: '$2',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  '.btn-create-task': {
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
  },

  '&:hover .btn-create-task': {
    opacity: 1,
  },

  variants: {
    isCurrentM: {
      true: {
        backgroundColor: '$gray300'
      },
    }
  }
});

export const StyledCalendarBodyCellTitle = styled('div', {

});