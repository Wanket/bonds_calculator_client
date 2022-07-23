import Bond from "@/api/type/bond";

export default interface BondInfo {
  Bond: Bond;

  MaturityIncome: number | null;
  CurrentIncome: number | null;
}
