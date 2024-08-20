import { MobileNavigator } from "./src/navigator/Mobile.navigator";
import { Provider } from "./src/provider/provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";

// ================================================

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MobileNavigator />
      </PersistGate>
    </Provider>
  );
}
