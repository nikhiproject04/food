import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RouteOptimizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="routeId" source="routeId" />
        <TextField label="startPoint" source="startPoint" />
        <TextField label="endPoint" source="endPoint" />
        <TextField label="optimizedRoute" source="optimizedRoute" />
      </SimpleShowLayout>
    </Show>
  );
};
