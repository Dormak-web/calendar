import {styled} from "@/styles/stitches.config";

export const StyledCalendarDay = styled('div', {
  overflow: 'hidden',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '20px 1fr',
})

export const StyledCalendarDayHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

