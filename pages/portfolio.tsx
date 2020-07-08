const Portfolio = () => (
  <section>
    <p className='cool-text'>My React Native Apps</p>
    <article>
      <header><p className='cool-subtext'>KitChat - A Chat App</p></header>
      <a href='/kitchat-1-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/kitchat-1.png' alt='One on One Chatting Screen' />
      </a>
      <a href='/kitchat-2-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/kitchat-2.png' alt='Message Threads Screen' />
      </a>
      <a href='/kitchat-3-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/kitchat-3.png' alt='Sign Up Screen' />
      </a>
    </article>

    <article>
      <header><p className='cool-subtext'>Hangout Time - Schedule Meetups when Everybody's Free</p></header>
      <a href='/hangouttime-1-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/hangouttime-1.png' alt='Create a New Event Screen' />
      </a>
      <a href='/hangouttime-2-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/hangouttime-2.png' alt='Choose Dates and Times for Event Screen' />
      </a>
      <a href='/hangouttime-3-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/hangouttime-3.png' alt='Events you are Going to Screen' />
      </a>
      <a href='/hangouttime-4-bg.png' target='_blank' rel='noreferrer noopener'>
        <img src='/hangouttime-4.png' alt='App Drawer' />
      </a>
    </article>

    <style jsx>{`
      a {
        border-bottom: none;
      }
    `}</style>
  </section>
);

export default Portfolio;
