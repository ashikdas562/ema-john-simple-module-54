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
*step - 2: setup components
1. Create Login Component
2. Create Register Component
3. Create Route for Login & Register..
--------------------
step - 3 : set auth systems
1.setup singin method
2.setup sing out method
3. user state
4.special observer
5. retrun necessary methods & states from useFirebase
---------------
setp - 4: create auth context hooks (useAuth)
1. create a auth context
2. create context provider
3. set context provider context value 
4. use auth provider
5. crerate useAuth Hook
-----------------------
step-5 : create private router
1.create private route
2. set private route
*/



