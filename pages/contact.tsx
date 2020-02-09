import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF,faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <section>
    <p className='cool-text'><a href='mailto:hashir@hashirahmad.com'>Send an Email</a></p>
    <p className='cool-subtext'>You can contact me on the following channels as well:</p>
    <div>
      <a href='https://facebook.com/hashir.ahmad.6' title='Facebook Profile' target='_blank'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
    <div>
      <a href='https://linkedin.com/in/hashirahmad' title='LinkedIn Profile' target='_blank'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
    <div>
      <a href='https://github.com/HasheeLeo' title='GitHub Profile' target='_blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    <style jsx>{`
      div {
        display: inline-block;
        vertical-align: middle;
        width: 4rem;
        height: 100%;
        margin-top: 1rem;
        margin-left: 3rem;
        margin-right: 3rem;
      }
      
      div a {
        border-bottom: none;
      }
    `}</style>
  </section>
);

export default Contact;
