interface IRequest {
  Title: string,
  NgayTao: string,
  MucDoUuTien: number
}

interface IRequestReducer {
  requests: IRequest[],
  request: IRequest
}

export type {
  IRequest,
  IRequestReducer
}