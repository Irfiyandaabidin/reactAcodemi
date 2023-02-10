import { Provider } from "react-redux";
import Shoes from "./component/Shoes";
import Gloves from "./component/Gloves";
import ShoesHook from "./component/ShoesHook";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Gloves />
      <Shoes />
      <ShoesHook />
    </Provider>
  );
}

export default App;
