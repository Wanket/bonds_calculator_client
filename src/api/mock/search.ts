import { rest } from "msw";

export default rest.get("/api/static/search", (req, res, ctx) => {
  const query = req.url.searchParams.get("query");

  const result = [1, 2, 3].map((i) => ({
    Bond: {
      Id: `${query} ${i}`,
      CurrentPricePercent: 122,
      ShortName: `${query} ${i}`,
      Coupon: 0,
      NextCoupon: new Date("0001-01-01T00:00:00Z"),
      AccCoupon: 34,
      PrevPricePercent: 0,
      Value: 1000,
      CouponPeriod: 0,
      PriceStep: 0,
      CouponPercent: null,
      EndDate: new Date("3000-01-01T00:00:00Z"),
      Currency: "SUR",
    },
    MaturityIncome: 0.1212,
    CurrentIncome: null,
  }));

  return res(ctx.json(result));
});
