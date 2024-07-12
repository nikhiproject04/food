import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FoodDonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FoodDonations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="foodItem" source="foodItem" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="location" source="location" />
        <TextField label="quantity" source="quantity" />
      </Datagrid>
    </List>
  );
};
