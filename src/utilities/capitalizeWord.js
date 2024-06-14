function capitalizeWord(string) {
  const split = string.split(/[\s-]+/);
  const capitalize = split.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const result = capitalize.join(" ");

  return result;
}

export default capitalizeWord;
