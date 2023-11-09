import { LoginViewModel } from "../ViewModel/LoginViewModel";

export default () => {
  LoginViewModel.getInstance().setLogged(false)
}
