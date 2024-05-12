/**
 * Combines date and time inputs to create a new Date object adjusted to UTC.
 *
 * @param date - The date component.
 * @param hour - The hour component in HH:mm format.
 * @param offset - The timezone offset from UTC (e.g., '-03:00' for UTC-3).
 * @returns The combined and UTC-adjusted Date object.
 */
function combineDateAndTimeToUTC(
  date: Date,
  hour: string,
  offset: string,
): Date {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  const dateTimeString = `${year}-${month}-${day}T${hour}:00${offset}`;

  const dateObj = new Date(dateTimeString);

  return dateObj;
}

/**
 * Pads a number to ensure it has at least two digits by adding a leading zero if necessary.
 * This is commonly used for formatting dates and times to match ISO 8601 standards.
 *
 * @param num - The number to pad.
 * @returns A string representation of the number, padded to two digits if necessary.
 */
const pad = (num: number) => num.toString().padStart(2, "0");

export default combineDateAndTimeToUTC;
