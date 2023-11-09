import { useEffect, useState } from "react"
import { LoginViewModel } from "../ViewModel/LoginViewModel";

export const LoginHook = () => {

  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    const observer = LoginViewModel.getInstance().subscribe(value => {
      setLogged(value)
    })

    return () => {
      observer.unsubscribe();
    }

  })

  return { logged }

}
