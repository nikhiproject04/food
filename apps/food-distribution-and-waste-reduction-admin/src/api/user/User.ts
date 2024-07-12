import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  address: string | null;
  phoneNumber: string | null;
  userRole?: "Option1" | null;
};
