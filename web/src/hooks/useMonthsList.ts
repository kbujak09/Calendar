import { useMemo } from "react";
import { getMonthsList } from "../utils/time/getMontsList";

export function useMonthsList(count = 48) {
  return useMemo(() => getMonthsList(count), [count]);
}