export async function fetchHolidays(year: number) {
  try {
    const data = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/UA`)
    return await data.json();
  } catch (error) {
    return error
  }
}