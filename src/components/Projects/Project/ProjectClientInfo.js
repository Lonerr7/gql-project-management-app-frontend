import { BsFillPersonFill } from 'react-icons/bs';
import s from './Project.module.scss';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

const ProjectClientInfo = ({ name, email, phone }) => {
  return (
    <div className={s.info}>
      <h2 className={s.info__title}>Client Information</h2>
      <div className={s.info__box}>
        <p className={s.info__text}>
          <BsFillPersonFill className={s.info__icon} size={21} />
          {name}
        </p>
        <p className={s.info__text}>
          <MdEmail className={s.info__icon} size={21} />
          {email}
        </p>
        <p className={s.info__text}>
          <AiFillPhone className={s.info__icon} size={21} />
          {phone}
        </p>
      </div>
    </div>
  );
};

export default ProjectClientInfo;
