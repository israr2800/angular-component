export interface errorData {
    username: string,
    password: string,
}

export interface nestedData {
    discountedTotal?: number,
    total?: string,
    totalProducts?: number
}

export interface data {
    id: number,
    name: number,
    age: number
}

export interface arrayData {
    id: number,
    name: string,
    age: number
}

export interface apiList {
    id: number,
    completed: boolean,
    title: string,
    userId: number,
}