import { projectStatus } from './projectStatus';

const { NOT_STARTED, IN_PROGRESS, COMPLETED } = projectStatus;

export const statusSelectOptions = [
  { value: NOT_STARTED, label: 'Not Started' },
  { value: IN_PROGRESS, label: 'In Progress' },
  { value: COMPLETED, label: 'Completed' },
];
