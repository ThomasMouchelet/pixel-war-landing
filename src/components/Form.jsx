import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import firestoreDb from "../services/firebase.service";
const Form = () => {

  const [credentials, setCredentials] = useState({})

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setCredentials({
      ...credentials,
      [name]: value
    })
    setError(false)
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, credentials.email,credentials.password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: credentials.username
      })
      .then(() => {
        console.log("user created successfully");
        setCredentials({})
        setSuccess(true)
      })
      .catch((error) => {
        console.log(error.message)
        setError(true)
        setSuccess(false)
      })
    })
    .catch((error) => {
      console.log(error.message)
      setError(true)
      setSuccess(false)
    });
  }

  return (
    <form className="formulaire" id="form" onSubmit={handleSubmit}>
      <h2>
        Créée ton compte <br />
        et rejoins la bataille !
      </h2>
      <input
        className="input-form"
        type="text"
        name="email"
        id="name"
        placeholder="E-mail"
        onInput={handleChange}
      />
      <input
        className="input-form"
        type="text"
        name="username"
        id="email"
        placeholder="Username"
        onInput={handleChange}
      />
      <input
        className="input-form"
        type="text"
        name="password"
        id="phone"
        placeholder="Password"
        minLength={6}
        onInput={handleChange}
      />
      <button>S'inscrire</button>

      {error ? <p>Une erreur s'est produite. Veuillez réesayer plus tard 😢</p> : null}
      {success ? <p>Bienvenue ! Ton compte a bien était créé ! 🎉</p> : null}
    </form>
  );
};

export default Form;
