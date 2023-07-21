import Select from 'react-select';

const SelectField = ({ selectOptions, onSelectChange, defaultValue }) => {
  return (
    <Select
      options={selectOptions}
      onChange={onSelectChange}
      defaultInputValue={defaultValue}
    />
  );
};

const withOnSelectChangeSelect = (
  selectOptions,
  onSelectChange,
  defaultValue
) => {
  const NewComponent = () => {
    return (
      <SelectField
        onSelectChange={onSelectChange}
        defaultValue={defaultValue}
        selectOptions={selectOptions}
      />
    );
  };

  return NewComponent;
};

export default withOnSelectChangeSelect;
