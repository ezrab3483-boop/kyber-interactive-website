import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./css/Register.css";

import GoogleIcon from "../assets/icons/google.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import AppleIcon from "../assets/icons/apple.svg";
import SteamIcon from "../assets/icons/steam.svg";
import XboxIcon from "../assets/icons/xbox.svg";
import PSIcon from "../assets/icons/ps.svg";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const currentYear = new Date().getFullYear();
const years = [];
for (let y = currentYear; y >= 1900; y--) { // from current year down to 1900
  years.push(y);
}

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Other"
];

function Register() {
  
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("register.title");
  }, [t]);
  
  
  
  
  const [country, setCountry] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = country && day && month && year;

  const handleContinue = () => {
    setSubmitted(true);
    if (!isValid) return;
    alert(`Country: ${country}\nDOB: ${day} ${month} ${year}`);
  };

  const inputClass = value => submitted && !value ? "invalid" : "";

  const socialProviders = [
    { name: "Google", icon: GoogleIcon },
    { name: "Facebook", icon: FacebookIcon },
    { name: "Apple", icon: AppleIcon },
    { name: "Steam", icon: SteamIcon },
    { name: "Xbox", icon: XboxIcon },
    { name: "PlayStation", icon: PSIcon }
  ];

  const handleSocialLogin = provider => {
    alert(`Social login clicked: ${provider}`);
  };

  return (
    <div className="register-page">
      <div className="dob-card">
        <img class="register-logo" src="https://cdn.kyberinteractive.com/2.png" alt="" />
        <center><h3>{t("register.createKyberAccount") || "Create your Kyber Interactive Account"}</h3></center>
        <p className="social-login-text">{t("register.orSignInWith") || "Or sign in with"}</p>

        <div className="social-buttons">
          {socialProviders.map(p => (
            <button key={p.name} onClick={() => handleSocialLogin(p.name)} className={`social-btn ${p.name.toLowerCase()}`}>
              <img src={p.icon} alt={p.name} className="social-icon"/>
            </button>
          ))}
        </div>

        <div className="or-separator">
          <span>or</span>
        </div>



        <div className="DateofBirthTitle">
          <span>
            {t("register.countryregion") || "COUNTRY/REGION"}
          </span>
        </div>

        <div className="dob-inputs">
          <select value={country} onChange={e => setCountry(e.target.value)} className={inputClass(country)}>
            <option value="">Country / Region</option>
            {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
        </div>



        <div className="DateofBirthTitle">
          <span>
            {t("register.dateofbirthtitle") || "DATE OF BIRTH"}
          </span>
        </div>

        <div className="dob-inputs">
          <select value={day} onChange={e => setDay(e.target.value)} className={inputClass(day)}>
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
          </select>
          <select value={month} onChange={e => setMonth(e.target.value)} className={inputClass(month)}>
            <option value="">Month</option>
            {months.map((m, i) => <option key={i} value={m}>{m}</option>)}
          </select>
          <select value={year} onChange={e => setYear(e.target.value)} className={inputClass(year)}>
            <option value="">Year</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <button className="next-btn" onClick={handleContinue}>
          {t("register.next") || "Next"}
        </button>

        <div className="register-footer">
          <span>
            {t("register.alreadyAccount") || "Already have an account?"}{" "}
            <a href="/login">{t("register.signIn") || "Sign in"}</a>
          </span>
          <a href="/privacy">{t("register.privacyPolicy") || "Privacy Policy"}</a>
        </div>
      </div>
    </div>
  );
}

export default Register;