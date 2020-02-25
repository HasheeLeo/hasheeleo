const Portfolio = () => {
  const kitchat = [
    {
      original: '/kitchat-1.png',
      thumbnail: '/kitchat-1.png'
    },

    {
      original: '/kitchat-1.png',
      thumbnail: '/kitchat-1.png'
    }
  ];

  return (
    <section>
      <p className='cool-text'>My React Native Apps</p>
      <article>
        <header><p className='cool-subtext'>KitChat - A Chat App</p></header>
        <img src='/kitchat-1.png' alt='One on One Chatting Screen' />
        <img src='/kitchat-2.png' alt='Message Threads Screen' />
        <img src='/kitchat-3.png' alt='Sign Up Screen' />
      </article>

      <article>
        <header><p className='cool-subtext'>Hangout Time - Schedule Meetups when Everybody's Free</p></header>
        <img src='/hangouttime-1.png' alt='Create a New Event Screen' />
        <img src='/hangouttime-2.png' alt='Choose Dates and Times for Event Screen' />
        <img src='/hangouttime-3.png' alt='Events you are Going to Screen' />
        <img src='/hangouttime-4.png' alt='App Drawer' />
      </article>
    </section>
  );
};

export default Portfolio;
