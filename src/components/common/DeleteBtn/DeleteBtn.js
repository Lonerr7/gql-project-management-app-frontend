import s from './DeleteBtn.module.scss';
import { MdDelete } from 'react-icons/md';

const DeleteBtn = ({
  btnCName,
  Icon,
  defaultIconSize,
  defaultIconCName,
  onDelete,
  disabled,
}) => {
  return (
    <button
      className={
        disabled
          ? `${s.deleteBtn} ${btnCName} ${s.disabled}`
          : `${s.deleteBtn} ${btnCName}`
      }
      onClick={onDelete}
      disabled={disabled}
    >
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
