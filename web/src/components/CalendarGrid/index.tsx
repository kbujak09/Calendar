import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import buildMonthGrid, { type DayGridItem } from '../../utils/time/buildMonthGrid';
import CalendarDay from './CalendarDay';

import styles from './index.module.scss';

export default function CalendarGrid() {

  const [selectedMonth, setSelectedMonth] = useState(() => {
    return format(new Date(), 'yyyy-MM');
  });

  const [monthGrid, setMonthGrid] = useState<DayGridItem[]>([]);

  useEffect(() => {  
    const grid = buildMonthGrid(selectedMonth);
    setMonthGrid(grid);
  }, [selectedMonth]);

  return (
    <div className={styles.container}>
      {
        monthGrid.map((item) => {
          return <CalendarDay data={item} key={item.date.toISOString()}/>
        })
      }
    </div>
  )
}