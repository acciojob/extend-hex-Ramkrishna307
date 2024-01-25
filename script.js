const extendHex = (shortHex) => {
  // write your code here
// Remove the "#" symbol if present
  shortHex = shortHex.replace(/^#/, '');

  // Split the short hex code into individual color components
  const r = shortHex[0];
  const g = shortHex[1];
  const b = shortHex[2];

  // Extend each color component to the full hex format
  const fullHex = `#${r}${r}${g}${g}${b}${b}`;

  return fullHex.toUpperCase(); // Convert to uppercase for consistency
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
