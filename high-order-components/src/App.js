// import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

// const UserInfoWithLoader = withUser(UserInfo, "123");

// const UserInfoWrapped = printProps(UserInfo);

function App() {
  //   return <UserInfoWrapped a={1} b="Hello" c={{ name: "S" }}></UserInfoWrapped>;

  //   return <UserInfoWithLoader />;
  return <UserInfoForm />;
}

export default App;
