import s from './DeleteBtn.module.scss';
import { MdDelete } from 'react-icons/md';

const DeleteBtn = ({
  btnCName,
  Icon,
  defaultIconSize,
  defaultIconCName,
  onDelete,
}) => {
  return (
    <button className={`${s.deleteBtn} ${btnCName}`} onClick={onDelete}>
      {Icon ? (
        Icon
      ) : (
        <MdDelete
          className={`${s.deleteBtn__icon} ${defaultIconCName}`}
          size={defaultIconSize ? defaultIconSize : 22}
        />
      )}
    </button>
  );
};

export default DeleteBtn;
