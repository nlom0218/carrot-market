export const cls = (...classnames: string[]) => {
  console.log(classnames);

  return classnames.join(" ");
};
