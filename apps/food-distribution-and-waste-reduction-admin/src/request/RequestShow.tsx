import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="quantityRequested" source="quantityRequested" />
        <TextField label="requestStatus" source="requestStatus" />
        <TextField label="location" source="location" />
        <TextField label="foodItem" source="foodItem" />
      </SimpleShowLayout>
    </Show>
  );
};
