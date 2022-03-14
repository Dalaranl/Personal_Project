export function dateSearch(createdAt: any, start: number, end: number) {
  const date = new Date(createdAt);
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1);
  const dd = String(date.getDate());
  const result = Number(yyyy + mm + dd);

  if (start <= result && result <= end) {
    return true;
  } else {
    return false;
  }
}
