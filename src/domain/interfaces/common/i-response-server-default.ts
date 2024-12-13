export interface IResponseServerDefault {
    status: number;
    message: string;
}

export interface IResponseServerWithData<T> extends IResponseServerDefault {
    data: T;
}