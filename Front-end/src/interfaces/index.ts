export interface ISetDataUser {
  setDataUser: any;
  setStepRegister: any;
}
export interface IHouseData {
  id: number;
  name: string;
  houseImg: string;
  active: boolean;
  dailyPrice: number;
  filterDate: string;
  checkIn: string;
  checkOut: string;
  latitude: number;
  longitude: number;
  idUser: number;
  description: string;
  likes: number;
}
export interface IUserData {
  name: string;
  email: string;
  rg: string;
  cpf: string;
  password: string;
  perfilImg: string;
  descUser: string;
  genre: string;
  likes: string;
  birthDate: string;
  admin: boolean;
}
export interface IConfirmReservation {
  idHouse: number;
  idOwer: number;
  totalDays: number;
  total: number;
  checkIn: string;
  checkOut: string;
}
