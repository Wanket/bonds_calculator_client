export default interface Bond {
  Id: string;
  CurrentPricePercent: number;
  ShortName: string;
  Coupon: number;
  NextCoupon: string;
  AccCoupon: number;
  PrevPricePercent: number;
  Value: number;
  CouponPeriod: number;
  PriceStep: number;
  CouponPercent: number | null;
  EndDate: string;
  Currency: string;
}

export function getBondCurrentPrice(bond: Bond): number {
  return bond.CurrentPricePercent * bond.Value;
}
