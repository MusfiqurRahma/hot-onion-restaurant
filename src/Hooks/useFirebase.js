import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const [user, setUser] = useState({});

const auth = getAuth();
const firebase = () => {
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
    
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })

    }
    const logOut = () => {
        signOut(auth)
            .then(result => { })
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
            return () => unSubscribed;
    }, [])

    return {
        signInUsingGoogle,
        user,
        logOut
    }
}
export default firebase;