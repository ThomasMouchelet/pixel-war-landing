import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import firestoreDb from "../services/firebase.service";
import gsap from 'gsap';
import { useEffect } from "react";
import { useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Form = () => {

  const [credentials, setCredentials] = useState({})

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const submitButtonRef = useRef(null);

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

  const handleAnimation = () => {
    gsap.to("#name", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#name',
      start: '0px center',
      end: '120px center',
      scrub:0.5,
      markers: true,
    }});
    gsap.to("#email", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#email',
      start: '0px center',
      end: '100px center',
      scrub:0.5,
      markers: true,
    }});
    gsap.to("#phone", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#phone',
      start: '-45px center',
      end: '0px center',
      scrub:0.5,
      markers: true,
    }});
  }

  useEffect(() => {
    handleAnimation();
  }, [])

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
        ref={firstInputRef}
        autoComplete={false}
      />
      <input
        className="input-form"
        type="text"
        name="username"
        id="email"
        placeholder="Username"
        onInput={handleChange}
        ref={secondInputRef}
        autoComplete={false}
      />
      <input
        className="input-form"
        type="text"
        name="password"
        id="phone"
        placeholder="Password"
        minLength={6}
        onInput={handleChange}
        ref={thirdInputRef}
        autoComplete={false}
      />
      <button className="form-input-submit" ref={submitButtonRef}>S'inscrire</button>

      {error ? <p>Une erreur s'est produite. Veuillez réesayer plus tard 😢</p> : null}
      {success ? <p>Bienvenue ! Ton compte a bien était créé ! 🎉</p> : null}
    </form>
  );
};

export default Form;
