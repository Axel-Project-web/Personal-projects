import './Message.css';

interface PropsInterface {
  msg: string;
  display: boolean;
}

function Message({ msg, display }: PropsInterface) {
  return (
    <div className={`message-container ${display && 'show-message'}`}>
      <h1 className='message'>{msg}</h1>
    </div>
  );
}

export default Message;
