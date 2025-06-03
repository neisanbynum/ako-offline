export type Nullable<T> = T | null
export type Prettier<T extends object> = { [K in keyof T]: T[K] } & {}