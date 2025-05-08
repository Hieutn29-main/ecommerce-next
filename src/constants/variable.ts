export const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
export const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const ACCESS_TOKEN = "accessToken";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
