import { DEFAULT_DAYTYPE, DEFAULT_DURATIONTYPE } from './contants'

export const createTimeSlot = ({
  message = '',
  time,
  durationType = DEFAULT_DURATIONTYPE,
  dayType = '',
}) => {
  return {
    message,
    durationType,
    time,
    dayType,
  }
}
