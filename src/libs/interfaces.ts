export interface FormValue {
  name: string;
  age: string;
  email: string;
  password: string;
  repeat: string;
  country: string;
  gender: string;
  upload: string;
  accept: string;
}

export interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  repeat?: string;
  country?: string;
  gender?: string;
  upload?: string;
  accept?: string;
}
