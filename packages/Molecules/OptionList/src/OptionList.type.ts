import { BaseProps } from '../../../Shared/NumlTypes';

export interface TOptionListProps extends BaseProps {
  selected?: any;
  options?: any;
  sections?: any;
  onChange?: any;
  multiSelect?: any;
  contentWrapperProps?: any;
  checkboxWrapperProps?: any;
  renderHeader?: any;
  renderContent?: any;
}