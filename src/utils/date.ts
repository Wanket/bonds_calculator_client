// calculate date between and return the difference in pretty print include years, return only two major values
export function calculateDateBetween(startDate: Date, endDate: Date) {
  const diff = endDate.getTime() - startDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) {
    return "0 days";
  }

  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const yearName = years === 1 ? "year" : "years";
  const monthName = months === 1 ? "month" : "months";
  const dayName = days === 1 ? "day" : "days";

  if (years > 0) {
    if (months % 12 !== 0) {
      return `${years} ${yearName}, ${months % 12} ${monthName}`;
    }

    return `${years} ${yearName}`;
  }

  if (months > 0) {
    if (days % 30 !== 0) {
      return `${months} ${monthName}, ${days % 30} ${dayName}`;
    }

    return `${months} ${monthName}`;
  }

  return `${days} ${dayName}`;
}
