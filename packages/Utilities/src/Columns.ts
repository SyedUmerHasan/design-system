/**
 * Properties that are added in props
 */

type ColumnsUtilityProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

/**
 * Properties that are return form the Responsive utility
 */

type ColumnsUtilityReturnProps = {
  column: string;
};

/**
 * This function is used to get responsive attribute,
 * to make site responsive
 * @param props
 * @returns
 */

const ColumnsUtility = (
  props: ColumnsUtilityProps
): ColumnsUtilityReturnProps => {
  const { xs = '', sm = '', md = '', lg = '', xl = '' } = props;
  let column = `${xl}|${lg}|${md}|${sm}|${xs}`;
  return { column };
};

export { ColumnsUtility };
