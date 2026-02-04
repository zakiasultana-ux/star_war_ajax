export const characterImages = {
  "Luke Skywalker": "/images/LukeSkywalker.webp",
  "C-3PO": "/images/C-3PO.webp",
  "R2-D2": "/images/R2-D2.webp",
  "Darth Vader": "/images/Darth_Vader.jpg",
  "Leia Organa": "/images/Leia_Organa.jpg",
  "Owen Lars": "/images/OwenLars.webp",
  "Beru Whitesun lars": "/images/BeruWhitesunLars.webp",
  "R5-D4": "/images/R5D4.webp",
  "Biggs Darklighter": "/images/Biggs_Darklighter.webp",
  "Obi-Wan Kenobi": "/images/Obi-Wan_Kenobi.webp"
};

export const characterGenders = {
  "Luke Skywalker": "Male",
  "C-3PO": "Droid",
  "R2-D2": "Droid",
  "Darth Vader": "Male",
  "Leia Organa": "Female",
  "Owen Lars": "Male",
  "Beru Whitesun lars": "Female",
  "R5-D4": "Droid",
  "Biggs Darklighter": "Male",
  "Obi-Wan Kenobi": "Male"
};

export const characters = Object.keys(characterImages).map(function(name, index) {
  return {
    id: index + 1,
    name: name,
    gender: characterGenders[name],
    image: characterImages[name]
  };
});