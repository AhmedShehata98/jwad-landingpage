import { BASE_URL } from "@/services/api";

export function imagePrefixPath(path: string) {
  if (!path) return `${BASE_URL}/uploads/`;
  return `${BASE_URL}${path}`;
}
