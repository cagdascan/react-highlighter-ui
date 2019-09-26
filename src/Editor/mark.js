const findAndSurroundWithColoredMark = (phrase, wholeText) => {
  return `${wholeText.value.substring(
    0,
    phrase.start
  )}<mark style="background-color: ${phrase.color}">${
    phrase.text
  }</mark>${wholeText.value.substring(phrase.end)}`;
};

export default findAndSurroundWithColoredMark;
