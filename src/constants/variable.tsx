import { CardSection5_I } from "@/types";

export const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
export const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const setRefreshToken = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN, token);

export const removeToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(ACCESS_TOKEN);
};

export const HEADER_NAV_LINK = {
  Home: "home",
  Products: "products",
  Carts: "carts",
  Recipes: "recipes",
  User: "user",
  Post: "post",
  Comment: "comment",
  Todos: "todos",
  Quoest: "quoest",
};
export const HEADER_NAV_LINK_CARD: CardSection5_I[] = [
  {
    title: "products",
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 24 24">
        <path
          stroke="white"
          stroke-linejoin="round"
          stroke-width="1"
          d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
        ></path>
      </svg>
    ),
    color: "#ff697c",
  },
  {
    title: "carts",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        ></path>
      </svg>
    ),
    color: "#55b9b7",
  },
  {
    title: "recipes",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
        ></path>
      </svg>
    ),
    color: "#757bf3",
  },
  {
    title: "user",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        ></path>
      </svg>
    ),
    color: "#f67e7f",
  },
  {
    title: "post",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
        ></path>
      </svg>
    ),
    color: "#55b9b7",
  },
  {
    title: "comment",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        ></path>
      </svg>
    ),
    color: "#757bf3",
  },
  {
    title: "todos",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
        ></path>
      </svg>
    ),
    color: "#f67e7f",
  },
  {
    title: "quoest",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
        ></path>
      </svg>
    ),
    color: "#ff697c",
  },
];
