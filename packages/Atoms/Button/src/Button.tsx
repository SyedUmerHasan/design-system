import React from 'react';
import * as El from '@numl-react/elements';
import { isExist } from '../../../Utilities/src/Object';

function Button(props: any): JSX.Element {
  const {
    children = undefined,
    type = 'medium',
    icon = undefined,
    menu = undefined,
    selectable = false,
    dropdownIcon = true,
    theme,
    onTap,
    ...otherProps
  } = props;

  let size;
  let padding;
  if (type === 'small') {
    size = 'sm';
    padding = '1x 2x';
  } else if (type === 'medium') {
    size = 'md';
    padding = '1.5x 2.5x';
  } else if (type === 'large') {
    size = 'lg';
    padding = '2x 3x';
  } else if (type === 'extralarge') {
    size = 'xl';
    padding = '2x 4x';
  }

  return (
    <El.Button
      block
      outline="n"
      theme={theme}
      size={size}
      selectable={selectable}
      padding={padding}
      onTap={onTap}
      {...otherProps}
    >
      {icon && typeof icon === 'string' ? (
        <Button.Icon padding="0" name={icon} theme={theme} />
      ) : (
        icon
      )}
      {children}
      {isExist(menu) && typeof menu === 'object' ? (
        <>
          {dropdownIcon ? <El.DropdownIcon theme={theme} /> : null}
          <Button.Popup width={'max-content'}>{menu}</Button.Popup>
        </>
      ) : null}
    </El.Button>
  );
}

Button.Small = (props: any) => {
  const { children = null, ...otherProps } = props;

  return (
    <Button padding={'0.75x 2x'} size={'sm'} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Medium = (props: any) => {
  const { children = null, ...otherProps } = props;

  return (
    <Button padding={'1.5x 2.5x'} size={'md'} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Large = (props: any) => {
  const { children = null, ...otherProps } = props;

  return (
    <Button padding={'2x 3x'} size={'lg'} {...otherProps}>
      {children}
    </Button>
  );
};
Button.ExtraLarge = (props: any) => {
  const { children = null, ...otherProps } = props;

  return (
    <Button padding={'2x 4x'} size={'xl'} {...otherProps}>
      {children}
    </Button>
  );
};

Button.Label = function ButtonLabel(props: any) {
  const { children, ...otherProps } = props;
  return <El.Label {...otherProps}>{children}</El.Label>;
};

Button.Icon = function ButtonIcon(props: any) {
  const { children, padding = '0 0.5x', ...otherProps } = props;
  return (
    <El.Icon padding={padding} {...otherProps}>
      {children}
    </El.Icon>
  );
};

Button.Popup = function ButtonDropDownPopup(props: any) {
  const { children, ...otherProps } = props;
  return (
    <El.Popup nu-btnpopup place="outside-bottom right" {...otherProps}>
      {children}
    </El.Popup>
  );
};

Button.Item = function ButtonDropDownPopupList(props: any) {
  const { children, width = '100%', outline = 'n', ...otherProps } = props;
  return (
    <El.Menuitem width={width} outline={outline} {...otherProps}>
      {children}
    </El.Menuitem>
  );
};

Button.Checkbox = function ButtonCheckbox(props: any) {
  const { children, padding = '0', ...otherProps } = props;
  return (
    <El.Checkbox padding={padding} {...otherProps}>
      {children}
    </El.Checkbox>
  );
};

Button.Group = function ButtonGroup(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  return (
    <El.Flex flow="row" fill="transparent" gap {...otherProps}>
      {children}
    </El.Flex>
  );
};

Button.SegmentedGroup = function ButtonGroup(allProps: any): JSX.Element {
  const { children, ...otherProps } = allProps;
  return <El.ButtonGroup {...otherProps}>{children}</El.ButtonGroup>;
};

export default Button;
