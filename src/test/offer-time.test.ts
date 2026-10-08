import { describe, expect, it } from "vitest";
import { dailyOfferSeconds, countdownParts } from "@/components/landing/offer-time";

describe("daily Early Bird reset", () => {
  it("resets at midnight IST", () => {
    expect(dailyOfferSeconds(Date.parse("2026-10-08T18:29:59Z"))).toBe(1);
    expect(dailyOfferSeconds(Date.parse("2026-10-08T18:30:00Z"))).toBe(86400);
  });
  it("uses one common deadline and counts down", () => {
    const now = Date.parse("2026-10-08T08:00:00Z");
    expect(dailyOfferSeconds(now)).toBe(37800);
    expect(dailyOfferSeconds(now + 1000)).toBe(37799);
    expect(countdownParts(37800)).toEqual(["10", "30", "00"]);
  });
});