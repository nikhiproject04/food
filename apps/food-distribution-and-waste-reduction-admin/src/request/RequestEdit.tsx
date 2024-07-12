import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="quantityRequested"
          source="quantityRequested"
        />
        <SelectInput
          source="requestStatus"
          label="requestStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="location" source="location" />
        <TextInput label="foodItem" source="foodItem" />
      </SimpleForm>
    </Edit>
  );
};
