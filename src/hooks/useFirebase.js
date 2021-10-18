import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }



    const signInWithPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .finally(() => setIsLoading(false));
    }

    const logInWithPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInWithPassword,
        logInWithPassword

    }
}

export default useFirebase;