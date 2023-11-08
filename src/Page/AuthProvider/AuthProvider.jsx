import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.Config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginByemail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const Unsubcribe = onAuthStateChanged(auth, (user) => {
        const userEmail = user?.email || user?.email
        const loggedUser = {email:userEmail}

      setUser(user);
      setLoading(false);
      if(user){
        axios.post('https://assingment-11-server-site-iota.vercel.app/jwt' , loggedUser, {withCredentials:true})
        .then(res=> {
            console.log('token response', res.data)
        })
      }
      else{
        axios.post('https://assingment-11-server-site-iota.vercel.app/logout',loggedUser,{withCredentials:true})
        .then(res => {
            console.log(res.data)
        })
      }
    });
    return () => {
      Unsubcribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    loginGoogle,
    createUserEmail,
    loginByemail,
    logOut,
    userUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
