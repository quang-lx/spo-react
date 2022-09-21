interface IRequest {
  Title: string,
  NgayTao: string,
  MucDoUuTien: number
}

interface IRequestReducer {
  requests: IRequest[],
  request: IRequest
}

interface IRequestDetailItem {
  key?: string,
  title: JSX.Element | string,
  content: JSX.Element | string,
  className?: string,
  align?: 'start' | 'center' | 'end' | 'stretch'
}

interface IRequestDetailItems {
  items: IRequestDetailItem[]
}

export type {
  IRequest,
  IRequestReducer,
  IRequestDetailItem,
  IRequestDetailItems
}