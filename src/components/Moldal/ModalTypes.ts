import { StatusOptions } from "@/types/Transaction"
export interface IModalTypes {
  status: StatusOptions;
  amount: Number;
  from: String;
  to: any;
}

export interface IModal {
  modal: IModalTypes;
}
