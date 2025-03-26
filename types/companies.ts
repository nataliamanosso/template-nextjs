export interface Company {
  id: number
  tradeName: string
  cnpj: string
  operationType: OperationType
  address: string
  contact: string
  registrationDate: Date
}

export interface CompanyPayload {
  tradeName: string
  cnpj: string
  operationType: OperationType
  address: string
  contact: string
}

export enum OperationType {
  Supplier = 1,
  Distributor = 2,
  Both = 3,
}
