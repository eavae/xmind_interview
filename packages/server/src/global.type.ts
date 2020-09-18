import csvdb from 'csv-database'

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
export type CSVDBType = ThenArg<ReturnType<typeof csvdb>>
