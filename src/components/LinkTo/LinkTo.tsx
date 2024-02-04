//styles
import './LinktTo.css';
//react router dom
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
  source?: string;
  label: string;
}

function LinkTo({ label, title, to, source }: Props) {
  return (
    <Link data-label={label} to={to} className='btn-goto'>
      <img className='icon-image' src={source} alt={label} />
      {title}
    </Link>
  );
}

export default LinkTo;
