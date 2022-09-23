import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";

import styles from "../styles/pages/home.module.scss";
const IconsText = dynamic(() => import("../assets/icons-text"));
const UnderConstruction = dynamic(() => import("../assets/under-construction"));
const Collapsible = dynamic(() => import("../components/collapsible"));

const formActionURL = "https://martyrstudio.us9.list-manage.com/subscribe/post?u=8380f146a5074758d98ba3400&amp;id=6a2bdb4a22&amp;f_id=002f04e1f0";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [openCollapsibleId, setOpenCollapsibleId] = useState("");

  const handleFormSubmit = () => {
    setTimeout(() => {
      setEmail("");
    }, 1000);
  }

  return (
    <div className={styles.page}>
      <h1>
        <span>Building</span>
        <span>the next industry</span>
        <IconsText />
      </h1>

      <UnderConstruction />

      <div className={styles.quote}>
        <h4>&quot;Marketing is the symbiosis of details.&quot;</h4>
        <h5>Marin Staicu</h5>
      </div>

      <div className={styles.wrapper}>
        <div>
          <h2>Get in touch</h2>

          <Collapsible id={[openCollapsibleId, setOpenCollapsibleId]} label="About us" styles={styles}>
            <div className={styles.about}>
              <p>Whether you need to clarify the future market position or to improve everyday experiences for your customers, we are here to serve.</p>
              <p>Think of us like that special assistant with insights into psychology, user experience and web design.</p>
            </div>
          </Collapsible>

          <Collapsible id={[openCollapsibleId, setOpenCollapsibleId]} label="Social Media" styles={styles}>
            <div className={styles.social_media}>
              <a href="https://www.facebook.com/martyrstudiocom/"><RiFacebookFill /><span>Facebook</span></a>
              <a href="https://www.instagram.com/martyrstudio_com/"><RiInstagramLine /><span>Instagram</span></a>
              <a href="https://twitter.com/martystudio_com/"><RiTwitterFill /><span>Twitter</span></a>
            </div>
          </Collapsible>

          <Collapsible id={[openCollapsibleId, setOpenCollapsibleId]} label="Newsletter" styles={styles}>
            <form onSubmit={handleFormSubmit} action={formActionURL} method="post" target="form_action" noValidate>
              <input
                type="email"
                placeholder="Email address"
                id="mce-EMAIL"
                name="EMAIL"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

              <button type="submit" disabled={!email}>Subscribe</button>
              <iframe key="form_action" id="form_action" name="form_action" />
            </form>
          </Collapsible>

          <Collapsible id={[openCollapsibleId, setOpenCollapsibleId]} label="Contact" styles={styles}>
            <div className={styles.contact}>
              <a href="mailto: info@martyrstudio.com">info@martyrstudio.com</a>
              <a href="tel: +40741040648">+40741040648</a>
              <span>Bucharest | Romania</span>
              <h5>Martyr Studio s.r.l.</h5>
            </div>
          </Collapsible>
        </div>

        <h6>copyright @ martyrstudio.com</h6>
      </div>
    </div>
  );
}

export default Home;