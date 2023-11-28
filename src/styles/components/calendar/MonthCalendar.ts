import {styled} from "styles/stitches.config";

export const MonthCalendarContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ccc',
});

export const MonthCalendarHead = styled('div', {
  paddingTop: 30,
  backgroundColor: '#f66',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  //   @todo add grid-template-columns: repeat(7, 1fr);
});

export const MonthCalendarBody = styled('div', {
  height: '100%',
  display: 'grid',
  gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
});

export const MonthCalendarBodyRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
});

export const MonthCalendarBodyCell = styled('div', {
  border: '1px solid #aaa',
});
