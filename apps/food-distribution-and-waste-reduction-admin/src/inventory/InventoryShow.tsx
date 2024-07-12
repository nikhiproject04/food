import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InventoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="quantityInStock" source="quantityInStock" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="foodItem" source="foodItem" />
      </SimpleShowLayout>
    </Show>
  );
};
