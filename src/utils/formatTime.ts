interface IFormattedTime {
  day: string;
  month: string;
  year: string;
  hours: string;
  minutes: string;
  seconds: string;
}

type FuncType = (time: string | Date | number) => IFormattedTime;

const formatZeroLeft = (value: number) => String(value).padStart(2, '0');

export const formatTime: FuncType = time => {
  const date = new Date(time);

  return {
    hours: formatZeroLeft(date.getHours()),
    minutes: formatZeroLeft(date.getMinutes()),
    seconds: formatZeroLeft(date.getSeconds()),
    day: formatZeroLeft(date.getDay()),
    month: formatZeroLeft(date.getMonth() + 1),
    year: formatZeroLeft(date.getFullYear()),
  };
};
