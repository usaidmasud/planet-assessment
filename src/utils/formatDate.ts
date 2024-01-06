import dayjs from "dayjs";

export default function formatDate(date: string, dateTime?: boolean): string {
  const formattedDate = dayjs(date).format(
    dateTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD",
  );
  return formattedDate;
}
