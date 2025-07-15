import type { RootState } from "../store";
import type { User } from "../types/user";

export function getCurrentUser(state: RootState): User | null {
  return state.auth.user;
}
