import { ICompany } from './company';

export interface IDiscount {
    _id?: String;
    email: String;
    createDate: Number;
    isUsed: Boolean;
    company: ICompany;
}