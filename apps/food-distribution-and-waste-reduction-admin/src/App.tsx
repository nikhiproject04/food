import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FoodDonationList } from "./foodDonation/FoodDonationList";
import { FoodDonationCreate } from "./foodDonation/FoodDonationCreate";
import { FoodDonationEdit } from "./foodDonation/FoodDonationEdit";
import { FoodDonationShow } from "./foodDonation/FoodDonationShow";
import { RequestList } from "./request/RequestList";
import { RequestCreate } from "./request/RequestCreate";
import { RequestEdit } from "./request/RequestEdit";
import { RequestShow } from "./request/RequestShow";
import { RouteOptimizationList } from "./routeOptimization/RouteOptimizationList";
import { RouteOptimizationCreate } from "./routeOptimization/RouteOptimizationCreate";
import { RouteOptimizationEdit } from "./routeOptimization/RouteOptimizationEdit";
import { RouteOptimizationShow } from "./routeOptimization/RouteOptimizationShow";
import { MachineLearningList } from "./machineLearning/MachineLearningList";
import { MachineLearningCreate } from "./machineLearning/MachineLearningCreate";
import { MachineLearningEdit } from "./machineLearning/MachineLearningEdit";
import { MachineLearningShow } from "./machineLearning/MachineLearningShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Food Distribution and Waste Reduction"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FoodDonation"
          list={FoodDonationList}
          edit={FoodDonationEdit}
          create={FoodDonationCreate}
          show={FoodDonationShow}
        />
        <Resource
          name="Request"
          list={RequestList}
          edit={RequestEdit}
          create={RequestCreate}
          show={RequestShow}
        />
        <Resource
          name="RouteOptimization"
          list={RouteOptimizationList}
          edit={RouteOptimizationEdit}
          create={RouteOptimizationCreate}
          show={RouteOptimizationShow}
        />
        <Resource
          name="MachineLearning"
          list={MachineLearningList}
          edit={MachineLearningEdit}
          create={MachineLearningCreate}
          show={MachineLearningShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
