function vowelsAmount(string) {
  const vowels = ["a", "e", "i", "u", "o", "y"];
  return string
    .trim()
    .split('')
    .filter((sound) => {
      for (let i = 0; i < vowels.length; i++) {
        if (sound === vowels[i]) {
            return sound;
        }
      }
    }).length;
}
console.log(vowelsAmount("hello world"));
