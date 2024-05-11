const AppButton = ({
  rowData,
  handleClick,
  btnClass = "bg-secondary",
  children,
}) => {
  return (
    <button
      className={`app-btn ${btnClass}`}
      onClick={() => handleClick({ rowData })}
    >
      {children}
    </button>
  );
};

export default AppButton;
