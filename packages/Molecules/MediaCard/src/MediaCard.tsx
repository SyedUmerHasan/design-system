import React from 'react';
import { Card, El } from '@numl-react/core';

function MediaCard(props: any) {
  const { src, action, heading, description, padding = '2x', columns = 'auto', ...otherProps } = props;
  return (
    <Card padding={padding} columns={columns} {...otherProps}>
      <El.Image src={src} width="100%" height="9.875rem"></El.Image>
      <El.Grid columns="auto 1fr" content="stretch end" items="stretch end" padding="2x 0x">
        <El.BaseElement text="bold">{heading}</El.BaseElement>
        <El.Icon align-self="end" name="ellipsis-horizontal-outline"></El.Icon>
      </El.Grid>
      <El.Grid columns="auto" gap>
        {description ? <El.BaseElement row="1">{description}</El.BaseElement> : null}
        {action ? <El.Block row="2">{action}</El.Block> : null}
      </El.Grid>
    </Card>
  );
}

export default MediaCard;
