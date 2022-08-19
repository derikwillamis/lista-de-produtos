export type StatusOptions = 'created' | 'processed' | 'processing'

export interface ITransaction {
  to: String;
  id: String;
  title: String;
  description: String;
  status: StatusOptions;
  amount: Number;
  date?: Date;
  from: String;
}
