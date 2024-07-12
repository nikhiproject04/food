import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RouteOptimizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="routeId" source="routeId" />
        <TextInput label="startPoint" source="startPoint" />
        <TextInput label="endPoint" source="endPoint" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
