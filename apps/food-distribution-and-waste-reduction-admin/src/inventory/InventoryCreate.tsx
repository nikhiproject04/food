import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="quantityInStock"
          source="quantityInStock"
        />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="foodItem" source="foodItem" />
      </SimpleForm>
    </Create>
  );
};
