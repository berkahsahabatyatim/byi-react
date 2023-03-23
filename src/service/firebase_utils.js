import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export const firebaseSignIn = async ({ email, password }) => {
    let result
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('sip', user);
            result = true
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            result = false
        });
    return result
}

export const firebaseRegister = async () => {
    await createUserWithEmailAndPassword(auth, "adminSEO@mail.com", "uiuiui89");
    const user = auth.currentUser;
    await updateProfile(user, {
        displayName: 'admin SEO'
    })
    console.log('oke berhasil')
}

export const firebaseUpdateDisplayName = async ({ name }) => {
    const user = auth.currentUser;
    await updateProfile(user, {
        displayName: name
    })
}

export const notifyArticleUpdate = async () => {
    const url = "https://berkahsahabatyatim.com/mau-update-artikel";
    sendPasswordResetEmail(auth, "ahmad.n.id@gmail.com", { url },);
}