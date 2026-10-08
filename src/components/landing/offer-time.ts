const IST_OFFSET_MS = 330 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Time until the next midnight in India; identical for every visitor. */
export function dailyOfferSeconds(now: number) {
  const elapsed = ((now + IST_OFFSET_MS) % DAY_MS + DAY_MS) % DAY_MS;
  return Math.ceil((DAY_MS - elapsed) / 1000);
}

export function countdownParts(seconds: number) {
  return [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60]
    .map((part) => String(part).padStart(2, "0"));
}