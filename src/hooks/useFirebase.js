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
  const [admin, setAdmin] = useState(false);

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
    axios
      .post("https://whispering-mesa-36934.herokuapp.com/users", user)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    fetch(`https://whispering-mesa-36934.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

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
    admin,
    isLoading,
    logOut,
    userRegister,
    userSignIn,
  };
};

export default useFirebase;
