import { useState } from "react";
import gsap from 'gsap';
import { useEffect } from "react";
import { useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { register } from "../services/services/auth.service";
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
    const data = {
      email: credentials.email,
      username: credentials.username,
      password: credentials.password
    }
    register(data, setSuccess, setError)
  }

  const handleAnimation = () => {
    gsap.to("#name", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#name',
      start: '0px center',
      end: '120px center',
      scrub:0.5,
      markers: false,
    }});
    gsap.to("#email", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#email',
      start: '0px center',
      end: '100px center',
      scrub:0.5,
      markers: false,
    }});
    gsap.to("#phone", {opacity: 100, ease: "power4.in", duration:1, scrollTrigger: {
      trigger: '#phone',
      start: '-45px center',
      end: '0px center',
      scrub:0.5,
      markers: false,
    }});

    gsap.from('.form-input-submit', {opacity: 0})

    gsap.to(".form-input-submit", {opacity: 100, ease: "bounce.easeInOut", duration:1, scrollTrigger: {
      trigger: '.form-input-submit',
      start: '-80px center',
      end: '0px center',
      scrub:0.5,
      markers: false,
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
        type="email"
        name="email"
        id="name"
        placeholder="Adresse e-mail"
        onInput={handleChange}
        ref={firstInputRef}
      />
      <input
        className="input-form"
        type="text"
        name="username"
        id="email"
        placeholder="Pseudo"
        onInput={handleChange}
        ref={secondInputRef}
      />
      <input
        className="input-form"
        type="password"
        name="password"
        id="phone"
        placeholder="Mot de Passe"
        minLength={6}
        onInput={handleChange}
        ref={thirdInputRef}
      />
      <button className="signup-space">S'inscrire</button>

      {error ? <p>Une erreur s'est produite. Veuillez réesayer plus tard 😢</p> : null}
      {success ? <p>Bienvenue ! Ton compte a bien était créé ! 🎉</p> : null}
    </form>
  );
};

export default Form;
