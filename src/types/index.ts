export interface Login_I {
  username: string;
  password: string;
  expiresInMins?: number;
}
export interface Loader_I {
  isPending: boolean;
}
