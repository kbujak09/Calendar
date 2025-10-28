import { eachMonthOfInterval, addMonths, format, startOfMonth } from "date-fns";

export function getMonthsList(count = 48) {
  const start = startOfMonth(new Date());
  const end = addMonths(start, count - 1);

  const months = eachMonthOfInterval({start, end}).map(data => 
    format(data, 'yyyy-MM')
  );

  return months;
}