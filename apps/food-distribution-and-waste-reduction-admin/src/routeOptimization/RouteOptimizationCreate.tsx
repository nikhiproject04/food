import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RouteOptimizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="routeId" source="routeId" />
        <TextInput label="startPoint" source="startPoint" />
        <TextInput label="endPoint" source="endPoint" />
        <div />
      </SimpleForm>
    </Create>
  );
};
