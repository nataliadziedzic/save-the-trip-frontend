import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { useIntl } from 'react-intl'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import format from 'date-fns/format'
import { StyledDatePicker } from './DatePicker.style'

export interface DatePickerProps {
  currentDate: Date | null
  setCurrentDateRead?: (date: string) => void
  setCurrentDateSend: (date: string) => void
}

const DatePicker: React.FC<DatePickerProps> = ({ currentDate, setCurrentDateRead, setCurrentDateSend }) => {
  const intl = useIntl()
  const [dateValue, setDateValue] = React.useState(currentDate)

  const changeDate = (date: Date) => {
    if (setCurrentDateRead) {
      setCurrentDateRead(format(date, 'dd-MM-yyyy'))
    }
    setCurrentDateSend(format(date, 'yyyy-MM-dd'))
    setDateValue(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <StyledDatePicker
        disablePast
        disableToolbar
        inputProps={{ readOnly: true }}
        variant='inline'
        format='dd/MM/yyyy'
        margin='normal'
        id='date-picker-inline'
        label={intl.formatMessage({ id: 'choose-date' })}
        value={dateValue}
        onChange={(date: any) => changeDate(date)}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )
}
export default DatePicker
