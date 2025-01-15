export const IS_API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "enable";
export const BASE_URL = IS_API_MOCKING
  ? typeof window === "undefined"
    ? "http://localhost:9090"
    : "http://localhost:3000"
  : (process.env.NEXT_PUBLIC_API_URL ?? "https://localhost:8000/api");
