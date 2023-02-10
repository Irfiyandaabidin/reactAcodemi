import { Provider } from "react-redux";
import store from "./app/store";
import Shoes from "./app/features/shoes/Shoes";
import User from "./app/features/user/User";

function App() {
  return (
    <Provider store={store}>
      <Shoes />
      <User />
    </Provider>
  );
}

export default App;
