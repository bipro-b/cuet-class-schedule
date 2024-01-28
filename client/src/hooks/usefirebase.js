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

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setIsLoading(false);
    });
  };

  const registerUser = (username,department,email,password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = {displayName: username,email, department,password };
        setUser(newUser);
        // Save user to the database
        saveUser(username,department,email,password,"POST");
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: username,
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
    fetch(`http://localhost:5000/api/auth/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
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

  const saveUser = async (username, department, email, password, method) => {
    const user = { username, department, email, password };
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        // Handle the error here, e.g., log it or throw an error
        throw new Error('Failed to save user');
      }
  
      // You can do something with the response if needed
      const data = await response.json();
      console.log('User saved successfully:', data);
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error saving user:', error.message);
    }
  };
  
  return {
    signInUsingGoogle,
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;