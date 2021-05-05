import React from 'react';
import { El } from '../../../Core';
import { TExceptionListProps } from './ExceptionList.type';

function ExceptionList(allProps: TExceptionListProps) {
  let { items, ...otherProps } = allProps;

  return (
    <El.BaseElement {...otherProps}>
      {typeof items == 'object' && items.length > 0
        ? items.map((eachItem: any, index: any) => {
            return (
              <El.Grid gap columns="auto auto auto auto" key={index}>
                {typeof eachItem.icon == 'string' ? <El.Icon name={eachItem.icon} /> : eachItem.icon}
                <El.BaseElement text="middle">{eachItem.title}</El.BaseElement>-
                <El.BaseElement text="middle">{eachItem.label}</El.BaseElement>
              </El.Grid>
            );
          })
        : null}
    </El.BaseElement>
  );
}

export default ExceptionList;
