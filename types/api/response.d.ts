export interface ApiResponse<T> {
    code: number,
    msg: string,
    data: any|T
}