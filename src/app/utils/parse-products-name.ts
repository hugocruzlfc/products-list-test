export function parseProductsName(name: string) {
  return name.toLowerCase().replace(/\s/g, '-');
}
