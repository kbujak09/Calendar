import { useMonthsList } from '../../hooks/useMonthsList';
import buildMonthGrid from '../../utils/time/buildMonthGrid';

import styles from './index.module.scss';

export default function CalendarGrid() {
  const months = useMonthsList(48);

  return (
    <div className={styles.container}>
      {
      }
    </div>
  )
}