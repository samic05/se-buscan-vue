import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import router from "@/router";

export const loginWithEmail = ({ commit }, { username, password }) => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  signInWithEmailAndPassword(auth, username, password)
    .then(() => {
      commit("setUser", auth.currentUser);
      router.push({ name: "home" });
    })

    .catch((err) => {
      console.log("Jueputa");
    });
};
export const loginwithFacebook = ({ commit }) => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  signInWithPopup(auth, new FacebookAuthProvider())
    .then((result) => {
      router.push({ name: "home" });
      commit("setUser", result.user);
    })
    .catch((err) => {
      console.log(err);
      console.log("gonorrea");
    });
};
export const loginWithGoogle = ({ commit }) => {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      commit("setUser", result.user);
      router.push({ name: "home" });
    })
    .catch((err) => {
      console.log(err);
      console.log("gonorrea");
    });
};
export const registerWithEmail = (
  { commit },
  { email, fullName, password, confirmedPassword }
) => {
  if (fullName && email) {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
    password === confirmedPassword
      ? createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: fullName,
            }).then(() => commit("setUser", auth.currentUser));
            router.push({ name: "home" });
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/weak-password") {
              alert("The password is too weak.");
            } else if (errorCode == "auth/email-already-in-use") {
              alert(errorMessage);
            }
          })
      : alert("The password desnt match");
  }
};
