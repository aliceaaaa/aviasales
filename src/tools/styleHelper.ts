export default function joinStyles(styleArr: Array<any>) {
  const clearArray = (arr: Array<string | boolean | undefined>) => {
    const clearArr = arr.filter((item) => typeof item === "string");

    return clearArr;
  };

  const styles = clearArray(Array.prototype.slice.call(arguments));
  return styles.join(" ");
}
