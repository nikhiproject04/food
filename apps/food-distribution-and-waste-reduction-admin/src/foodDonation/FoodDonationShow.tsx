import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FoodDonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="foodItem" source="foodItem" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="location" source="location" />
        <TextField label="quantity" source="quantity" />
      </SimpleShowLayout>
    </Show>
  );
};
