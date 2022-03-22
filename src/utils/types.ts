export type User = {
  name: string;
  email: string;
  cpf: string;
  rg: string;
  birthDate: string;
  cellphone: string;
};

export type UserState = {
  users: User[];
}