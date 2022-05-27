import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = ()=>{

initializeApp(firebaseConfig);

}

export default initializeAuthentication;


/* 
steps for authentication
------------------------
*step-1: Initial Setup
Initial setup
1. firebase: create project
2. create web app
3.get configuration
4. initilize firebase
5.enable auth method
--------------------
*step - 2: 
1. Create Login Component
2. Create Register Component
3. Create Route for Login & Register..
--------------------
step - 3 :
1.setup singin method
2.setup sing out method
3. user state
4.special observer

*/



