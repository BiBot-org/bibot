export function getFormattedDateFromLocalDateTime(localDateTime: string) {
  const date = new Date(localDateTime);
  if (date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } else {
    return "";
  }
}

export function getFormattedDateTimeFromLocalDateTime(localDateTime: string) {
  const date = new Date(localDateTime);
  if (date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  } else {
    return "";
  }
}

export function calculateThreeMonthAgo(selectedDate: string) {
  const currentDate = new Date(selectedDate);
  currentDate.setMonth(currentDate.getMonth() - 3);
  return currentDate.toISOString().slice(0, 10);
}
