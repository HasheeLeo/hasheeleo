import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF,faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <section>
    <p className='cool-subtext'>
      If you want to work with me,&nbsp;
      <a href='https://www.upwork.com/o/profiles/users/~01f3d7979ade77e02b/' target='_blank' rel='noreferrer noopener'>
        Contact Me on Upwork
      </a>.
      If you just want to talk, you can get in touch through the following channels as well:
    </p>
    <div>
      <a href='https://facebook.com/hashir.ahmad.6' title='Facebook Profile' target='_blank' rel='noreferrer noopener'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>
    <div>
      <a href='https://linkedin.com/in/hashirahmad' title='LinkedIn Profile' target='_blank' rel='noreferrer noopener'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
    <div>
      <a href='https://github.com/HasheeLeo' title='GitHub Profile' target='_blank' rel='noreferrer noopener'>
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
