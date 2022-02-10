export interface timeDefault {
    createdAt: Date,
    updatedAt: Date
}

export interface DetailResponse<T> {
    object: T,
    Error: boolean,
    Message: string
}

export interface ITask extends timeDefault {
    _id: string;
    name: string;
    description: string;
    status: boolean;
}

export interface ITaskPost {
    name: string;
    description: string;
}

export interface ListResponse<T> {
    object: T[];
    Error: boolean,
    Message: string
}

export interface ITaskRedux {
    task: ListResponse<ITask> | undefined,
    loading: boolean,
    message: string,
    taskDetail: DetailResponse<ITask> | undefined
}

export interface ITaskUpdateRedux<T> {
    model: T,
    id: string
}