import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "location";

export const RequestTitle = (record: TRequest): string => {
  return record.location?.toString() || String(record.id);
};
