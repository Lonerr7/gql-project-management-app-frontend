import Select from 'react-select';

const SelectField = ({
  selectOptions,
  onSelectChange,
  defaultValue,
  placeholder,
  selectConfig,
}) => {
  return (
    <Select
      options={selectOptions}
      onChange={onSelectChange}
      defaultInputValue={defaultValue}
      placeholder={placeholder}
      isClearable={selectConfig.isClearable}
      isLoading={selectConfig?.isLoading}
      isDisabled={selectConfig?.isLoading}
    />
  );
};

const withOnSelectChangeSelect = (
  selectOptions,
  onSelectChange,
  defaultValue,
  placeholder,
  selectConfig
) => {
  const NewComponent = () => {
    return (
      <SelectField
        onSelectChange={onSelectChange}
        defaultValue={defaultValue}
        selectOptions={selectOptions}
        placeholder={placeholder}
        selectConfig={selectConfig}
      />
    );
  };

  return NewComponent;
};

export default withOnSelectChangeSelect;
