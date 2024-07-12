import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MachineLearningEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <NumberInput
          step={1}
          label="predictedDemand"
          source="predictedDemand"
        />
      </SimpleForm>
    </Edit>
  );
};
