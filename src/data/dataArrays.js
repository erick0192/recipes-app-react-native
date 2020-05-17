export const categories = [
  {
    id: 3,
    name: 'Cocktail',
    photo_url: 'https://boulderlocavore.com/wp-content/uploads/2013/07/iStock_000025404012Small.jpg'
  },
  {
    id: 4,
    name: 'Smoothies',
    photo_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Tea',
    photo_url: 'https://images.wisegeek.com/cup-of-tea-and-pitcher-on-saucer.jpg'
  },
];

const glasses = {
  collins: 'Collins',
  boot: 'Boot',
  shoe: 'Shoe',
  shooter: 'Shooter'
}

const ices = {
  crushdice: 'Crushdice',
  other: 'Ice Cream'
}

export const recipes = [
  {
    categoryId: 3,
    title: 'Bloody Caesar',
    photo_url: 'https://www.cscassets.com/recipes/wide_cknew/wide_62211.jpg',
    photosArray: [
      'https://www.cscassets.com/recipes/wide_cknew/wide_62211.jpg',
      'https://www.artofdrink.com/wp-content/uploads/2018/11/Bloody-Caesar-Cocktail-Canada-Motts.jpg',
    ],
    glass: glasses.collins,
    ice: ices.crushdice,
    taste: 'Delicious',
    history: 'Ipsum loret dolor',
    style: 'Rome',
    garnish: "Décorer d'un citron et d'une branche de céleri.",
    presentation: 'Mettre sous verre et cocktail',
    description:
      '- Dans un collins: \n\t- Faire un rim de sel de celeri autour du verre\n\t2 sash de Tabasco\n\t- 4 dash de sauce Worcestershire\n- Glace\n\t- Remplir le verre de Clamato'
  },
];