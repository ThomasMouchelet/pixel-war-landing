import firestoreDb from "../config/firebase.service";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";

const register = async (data, setSuccess, setError) => {
    setSuccess(false)
    setError(false)
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: data.username,
      });
      const userData = {
        uid: user.uid,
        email: data.email,
        username: data.username,
        totalScore: 0,
        is_ban: false,
      };
      await setDoc(doc(firestoreDb, "users", user.uid), userData);
      setSuccess(true)
      setError(false)
    } catch (error) {
        setError(true)
        setSuccess(false)
        throw new Error(error.message);
    }
};

export {
    register,
}