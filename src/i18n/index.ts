/**
 * i18n tagged template, it always return the same result like a normal template string!
 */
export function i18n(strings: TemplateStringsArray, ...expressions: unknown[]) {
  const result: unknown[] = [];
  strings.forEach((str, index) => {
    result.push(str, expressions[index]);
    if (index !== strings.length - 1) result.push(expressions[index]);
  });
  return result.join('');
}
