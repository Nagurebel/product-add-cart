export interface UsersForm {
  fName: string;
  lname: string;
  email: string;
  password: string;
  role: string;
}

export interface Products {
  _id: string;
  pName: string;
  pDes: string;
  pPrice: number;
  pImage: string;
  date: any;
}
