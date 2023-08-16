import { loginUrl, registerUrl } from "@/routing/apiRoutes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

async function fetchNewUser(userInformation){
    const response = await fetch(registerUrl, {
        body: JSON.stringify(userInformation),
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
}

async function fecthValidateUser(userInformation){
    const response = await fetch(loginUrl, {
        body: JSON.stringify(userInformation),
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
}

const fetchingMapper = {
    login:fecthValidateUser,
    register:fetchNewUser
}

export default function LogSlider(){
    const router = useRouter();
    const [containerClasses, setContainerClasses] = useState("");
    const [sessionInformation, setSessionInformation] = useState("");
    useEffect(()=>{
        if(!sessionInformation){
            return;
        }
        const call = fetchingMapper[sessionInformation.type];
        call(sessionInformation.user).then(
            (response)=>{
                alert(response.message);
                if(response.done){
                    router.push("/user/dashboard");
                }
            }
        )
    }, [sessionInformation, router]);

    function loginHandler(){
        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;
        if(!email.trim() && !password.trim()){
            alert("Por favor ingrese todos los campos.");
            return;
        }
        const userInformation = {
            email, password
        };
        const newSessionInformation = {
            type:"login" ,  user : userInformation
        };
        setSessionInformation(newSessionInformation);
    }

    function registerHandler(){
        const firstName = document.getElementById("register_firstName").value;
        const lastName = document.getElementById("register_lastName").value;
        const email = document.getElementById("register_email").value;
        const password = document.getElementById("register_password").value;
        if(!email.trim() && !password.trim() && !firstName.trim() && !lastName.trim()){
            alert("Por favor ingrese todos los campos.");
            return;
        }
        const userInformation = {
            email, password, name:firstName, lastName
        };
        const newSessionInformation = {
            type:"register" ,  user : userInformation
        };
        setSessionInformation(newSessionInformation);
    }

    return (
        <div class={`container ${containerClasses}`} id="container">

        <div class="form-container register-container">
          <div className="form">
            <h1>Registrese aquí</h1>
            <input id="register_firstName" type="text" placeholder="Nombre"/>
            <input id="register_lastName" type="text" placeholder="Apellido"/>
            <input id="register_email" type="email" placeholder="Correo"/>
            <input id="register_password" type="password" placeholder="Contraseña"/>
            <button onClick={registerHandler}>Registrarse</button>
            <div class="social-container">
              <a href="https://www.facebook.com/WoodworksFurnitureMadison/" class="social"><i class="lni lni-facebook-fill"></i></a>
              <a href="https://www.pinterest.com/woodworkswi/" class="social"><i class="lni lni-pinterest-fill"></i></a>
              <a href="https://woodworksfurniturestore.com/" class="social"><i class="lni lni-website-fill"></i></a>
            </div>
          </div>
        </div>
    
        <div class="form-container login-container">
          <div className="form">
            <h1>Iniciar Sesión</h1>
            <input id="login_email" type="email" placeholder="Correo"/>
            <input id="login_password" type="password" placeholder="Contraseña"/>
            <button onClick={loginHandler}>Ingresar</button>
            <div class="social-container">
              <a href="https://www.facebook.com/WoodworksFurnitureMadison/" class="social"><i class="lni lni-facebook-fill"></i></a>
              <a href="https://www.pinterest.com/woodworkswi/" class="social"><i class="lni lni-pinterest-fill"></i></a>
              <a href="https://woodworksfurniturestore.com/" class="social"><i class="lni lni-website-fill"></i></a>
            </div>
          </div>
        </div>
    
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="title">¿Ya tienes <br/> una cuenta?</h1>
              <p>si es así<br/> ¡Inicia sesión aquí!</p>
              <button class="ghost" onClick={()=>setContainerClasses("")} id="login">Ingresar
                <i class="lni lni-arrow-left login"></i>
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="title">Crea tu <br/> cuenta aquí</h1>
              <p>si todavía no tienes una cuenta, únete para empezar a crear tus productos</p>
              <button class="ghost" onClick={()=>setContainerClasses("right-panel-active")} id="register">Registrarse
                <i class="lni lni-arrow-right register"></i>
              </button>
            </div>
          </div>
        </div>
    
      </div>
    )
}