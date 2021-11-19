import initializeFirebase from "../firebase/firebase.init";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const userRegister = (email, pass, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        saveUser(email, name);

        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const userSignIn = (email, pass, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res);
    });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    isLoading,
    logOut,
    userRegister,
    userSignIn,
  };
};

export default useFirebase;
