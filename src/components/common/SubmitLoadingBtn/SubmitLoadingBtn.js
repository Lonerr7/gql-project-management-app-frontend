import s from './SubmitLoadingBtn.module.scss';

const SubmitLoadingBtn = ({
  isFetching,
  btnClass,
  onSubmit,
  btnType,
  btnText,
  btnFetchingText,
}) => {
  return (
    <>
      {!isFetching ? (
        <button
          className={`${s.btn} ${btnClass}`}
          type={btnType}
          onClick={onSubmit}
        >
          {btnText}
        </button>
      ) : (
        <button className={`${btnClass} ${s.btn__disabled}`} disabled={true}>
          {btnFetchingText}...
        </button>
      )}
    </>
  );
};

export default SubmitLoadingBtn;
