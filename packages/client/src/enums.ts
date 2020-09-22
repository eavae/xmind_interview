export enum BillType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export enum Month {
  JAN = 1,
  FEB = 2,
  MAR = 3,
  APR = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUG = 8,
  SEPT = 9,
  OCT = 10,
  NOV = 11,
  DEC = 12,
}

export enum CurrencyType {
  RMB = 'RMB',
  DOLLAR = 'DOLLAR',
}

export const BILL_TYPE_TO_NAME = {
  [BillType.INCOME]: '收入',
  [BillType.OUTCOME]: '支出',
}

export const MONTH_TO_NAME = {
  [Month.JAN]: '一月',
  [Month.FEB]: '二月',
  [Month.MAR]: '三月',
  [Month.APR]: '四月',
  [Month.MAY]: '五月',
  [Month.JUNE]: '六月',
  [Month.JULY]: '七月',
  [Month.AUG]: '八月',
  [Month.SEPT]: '九月',
  [Month.OCT]: '十月',
  [Month.NOV]: '十一月',
  [Month.DEC]: '十二月',
}

export const BILL_TYPES = [BillType.OUTCOME, BillType.INCOME]

export const CURRENCY_TYPE_TO_SYMBOL = {
  [CurrencyType.RMB]: '¥',
  [CurrencyType.DOLLAR]: '$',
}
