import React from 'react';
import { El } from '@numl-react/core';

function Card(allProps: any): JSX.Element {
  const {
    heading,
    subheading,
    body,
    gap = '1x',
    padding = '2.5x',
    responsive = '801px|800px',
    headerActions,
    headerProps,
    footerProps,
    footerActions,
    children,
    ...otherProps
  } = allProps;
  return (
    <El.Card flex nu-card gap={gap} responsive={responsive} padding={padding}>
      <Card.Header
        heading={heading}
        subheading={subheading}
        headerActions={headerActions}
        {...headerProps}
      />
      <Card.Body body={body || children} {...otherProps} />
      {footerActions ? (
        <Card.Footer footerActions={footerActions} {...footerProps} />
      ) : null}
    </El.Card>
  );
}

Card.Header = function CardHeader(props: any) {
  const { heading, subheading, headerActions, ...otherProps } = props;
  return (
    <>
      {heading || subheading || headerActions ? (
        <El.Pane nu-header gap content="stretch space-between" {...otherProps}>
          <El.Block>
            {heading ? <El.Block size="lg"> {heading}</El.Block> : null}
            {subheading ? <El.Block size="xs"> {subheading}</El.Block> : null}
          </El.Block>
          <El.Block>{headerActions || null}</El.Block>
        </El.Pane>
      ) : null}
    </>
  );
};

Card.Body = function CardBody(props: any) {
  const { body, flow = 'row wrap', gap = '2x', ...otherProps } = props;
  return (
    <El.Flex nu-body gap={gap} flow={flow} {...otherProps}>
      {body ? <El.Block size="md">{body}</El.Block> : null}
    </El.Flex>
  );
};

Card.Section = function CardSection(props: any) {
  const {
    heading,
    padding = 'bottom 2x',
    border = 'bottom',
    subheading,
    children,
    ...otherProps
  } = props;
  return (
    <El.Block
      nu-section
      padding={padding}
      flex
      gap
      border={border}
      {...otherProps}
    >
      <Card.Header heading={heading} subheading={subheading} />
      {children ? <Card.Body body={children} /> : null}
    </El.Block>
  );
};

Card.Footer = function CardFooter(props: any) {
  const { footerActions, ...otherProps } = props;
  return (
    <El.Flex content="flex-end|flex-start" gap="1x" size="md" {...otherProps}>
      {typeof footerActions === 'string' ? (
        <El.Pane content="flex-end" size="md" border="0">
          {footerActions}
        </El.Pane>
      ) : (
        footerActions
      )}
    </El.Flex>
  );
};

export default Card;
