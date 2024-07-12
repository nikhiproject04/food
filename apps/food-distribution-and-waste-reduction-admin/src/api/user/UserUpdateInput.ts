import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  address?: string | null;
  phoneNumber?: string | null;
  userRole?: "Option1" | null;
};
