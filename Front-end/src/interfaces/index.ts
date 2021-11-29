export interface IFavorites {
  id: number;
  propertyId: number;
  userId: number;
}

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
  street: string;
  houseNumber: string;
  addressComplement: string;
  city: string;
  referencePoint: string;
  propertyType: string;
  spaceType: string;
  guestsQuantity: number;
  bedsQuantity: number;
  roomQuantity: number;
  bathroomQuantity: number;
  haveWifi: boolean;
  haveKitchen: boolean;
  haveSuite: boolean;
  haveGarage: boolean;
  haveAnimals: boolean;
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
