import { startOfMonth, eachDayOfInterval, startOfWeek, addDays, parse } from 'date-fns';

export default function buildMonthGrid(month: string) {
  const monthDate = parse(month, 'yyyy-MM', new Date());

  const firstDayOfTheMonth = startOfMonth(monthDate);
  const firstDayOfTheWeek = startOfWeek(firstDayOfTheMonth, { weekStartsOn: 1 });

  const lastDayOfTheGrid = addDays(firstDayOfTheWeek, 41);
  
  const grid = eachDayOfInterval({
    start: firstDayOfTheWeek,
    end: lastDayOfTheGrid
  });

  return grid;
}