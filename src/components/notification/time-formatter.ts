export function timeAgoFormatter(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  const intervals = {
    ano: 31536000,
    mês: 2592000,
    d: 86400,
    h: 3600,
    m: 60,
    s: 1,
  };

  for (let key in intervals) {
    // @ts-ignore
    const interval = Math.floor(seconds / intervals[key]);
    if (interval >= 1) {
      return `${interval}${key} atrás`;
    }
  }
  return "agora";
}
