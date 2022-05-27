import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged , signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singInUsingGoogle = ()=>{
       signInWithPopup(auth , googleProvider)
        .then(result =>{
            console.log(result.user);
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

// observe whether user auth state change or not
     useEffect( ()=>{
     onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user);
              // ...
            } 
            else {
              // User is signed out
              // ...
            }
          });
    },[])

    return {
        user,
     singInUsingGoogle,
     logOut,
     signOut
    }
}

export default useFirebase;

