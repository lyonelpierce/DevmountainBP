function guessGifts(wishlist, presents) {
  const matchingGifts = new Set();
  for (const present of presents) {
    for (const item of wishlist) {
      if (
        item.size === present.size &&
        item.clatters === present.clatters &&
        item.weight === present.weight
      ) {
        matchingGifts.add(item.name);
      }
    }
  }
  return Array.from(matchingGifts);
}

var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

console.log(guessGifts(wishlist, presents));
