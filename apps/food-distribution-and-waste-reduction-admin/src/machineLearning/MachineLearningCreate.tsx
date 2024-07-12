import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MachineLearningCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <NumberInput
          step={1}
          label="predictedDemand"
          source="predictedDemand"
        />
      </SimpleForm>
    </Create>
  );
};
