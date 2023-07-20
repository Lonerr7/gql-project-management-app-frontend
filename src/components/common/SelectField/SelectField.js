import Select from 'react-select';
import { projectStatus } from '../../../utils/projectStatus';

const { NOT_STARTED, IN_PROGRESS, COMPLETED } = projectStatus;

const SelectField = ({ onSelectChange, defaultValue }) => {
  const selectOtions = [
    { value: NOT_STARTED, label: 'Not Started' },
    { value: IN_PROGRESS, label: 'In Progress' },
    { value: COMPLETED, label: 'Completed' },
  ];

  return (
    <Select
      options={selectOtions}
      onChange={onSelectChange}
      defaultInputValue={defaultValue}
    />
  );
};

const withOnSelectChangeSelect = (onSelectChange, defaultValue) => {
  const NewComponent = () => {
    return (
      <SelectField
        onSelectChange={onSelectChange}
        defaultValue={defaultValue}
      />
    );
  };

  return NewComponent;
};

export default withOnSelectChangeSelect;
