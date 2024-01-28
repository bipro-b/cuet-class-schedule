import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import initializeFirebaseAuthentication from "../firebase/firebase.init";

// initialize firebase app
initializeFirebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [teacher, setTeacher] = useState(false);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setIsLoading(false);
    });
  };

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // Save user to the database
        saveUser(email, name, "POST");
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        //setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
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

  useEffect(() => {
    fetch(`https://l-tech-server.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  useEffect(() => {
    fetch(`https://l-tech-server.onrender.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data.teacher));
  }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://l-tech-server.onrender.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    signInUsingGoogle,
    user,
    admin,
    teacher,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;