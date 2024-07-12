import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RouteOptimizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RouteOptimizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="routeId" source="routeId" />
        <TextField label="startPoint" source="startPoint" />
        <TextField label="endPoint" source="endPoint" />
        <TextField label="optimizedRoute" source="optimizedRoute" />
      </Datagrid>
    </List>
  );
};
