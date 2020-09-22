export enum BillType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export const BILL_TYPE_TO_NAME = {
  [BillType.INCOME]: '收入',
  [BillType.OUTCOME]: '支出',
}

export const BILL_TYPES = [BillType.OUTCOME, BillType.INCOME]
