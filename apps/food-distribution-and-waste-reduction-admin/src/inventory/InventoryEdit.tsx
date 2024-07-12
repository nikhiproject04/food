import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="quantityInStock"
          source="quantityInStock"
        />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="foodItem" source="foodItem" />
      </SimpleForm>
    </Edit>
  );
};
