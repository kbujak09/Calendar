import { 
  startOfMonth, 
  eachDayOfInterval, 
  startOfWeek, 
  addDays, 
  parse, 
  isSameMonth, 
  isToday
} from 'date-fns';

export interface DayGridItem {
  date: Date;
  dayOfMonth: number,
  isCurrentMonth: boolean,
  isToday: boolean
}

export default function buildMonthGrid(month: string) {
  const monthDate = parse(month, 'yyyy-MM', new Date());

  const firstDayOfTheMonth = startOfMonth(monthDate);
  const firstDayOfTheWeek = startOfWeek(firstDayOfTheMonth, { weekStartsOn: 1 });

  const lastDayOfTheGrid = addDays(firstDayOfTheWeek, 41);
  
  const daysInterval = eachDayOfInterval({
    start: firstDayOfTheWeek,
    end: lastDayOfTheGrid
  });

  const grid: DayGridItem[] = daysInterval.map(day => {
    return {
      date: day,
      dayOfMonth: day.getDate(),
      isCurrentMonth: isSameMonth(day, monthDate),
      isToday: isToday(day),
    };
  });

  return grid;
}