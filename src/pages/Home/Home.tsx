//styles
import LinkTo from '../../components/LinkTo/LinkTo';
import './Home.css';

//image-icon
import icon_login from './assets/icon-login.svg';
import icon_singup from './assets/icon-sing.svg';

function Home() {
  return (
    <div className='home-wrapper'>
      <div className='app-home-wrapper'>
        <div className='title-wrapper'>
          <h1 className='main-title-home'>Write on me</h1>
          <h2 className='sub-title-home'>The best note-taking application</h2>
        </div>
        <div className='redirect-wrapper'>
          <LinkTo
            label='login'
            source={icon_login}
            to='/login'
            title='Hello again'
          />
          <hr className='divisor' />
          <LinkTo
            label='singup'
            source={icon_singup}
            to='/Singup'
            title='Join us'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
