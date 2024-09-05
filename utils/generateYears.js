export default function generateYears(from) {
  const currentYear = new Date().getFullYear();
  const yearArr = [];
  for (let i = from; i <= currentYear; i++) {
    yearArr.push({ value: i.toString(), label: i.toString() });
  }
  return yearArr;
}
