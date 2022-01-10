const waifuGifs = [
  "https://media2.giphy.com/media/5uq7NTJOndzaEfgp5A/giphy.gif?cid=790b76119be676c9170b7f552bc48d991e6f8e5a50ddbb73&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/bLK9DNRd7zNQOld7aH/giphy.gif?cid=790b76114a3a410e2beb84e6af83a4216cdf81585e9ef17c&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/Tm7wj3HXTx8E6MluJw/giphy.gif?cid=790b76115f0f487a0555a2b0ec3a4b171acdffd68e5863ad&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/KzKdCyM3ueleJBK3pj/giphy.gif?cid=790b7611be539df369f7eb28f10e72edc5db06ccd79c7f7a&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/e83EZJ8wJ7cQY7tVp2/giphy.gif?cid=790b7611cc496527b1f18497cb7b1b3d26ad8c19bf45110f&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/PewvI002geI07zv3PT/giphy.gif?cid=790b76112fdadae72e0639488d1fe896b41ea1d8ad984976&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/ULd32LlfkRFUQEZVi5/giphy.gif?cid=790b761124e2443fdf4a8af0f4738a9f8277b153b75689ce&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/WQtglzCIjoHy3l7dQ5/giphy.gif?cid=790b76114d93aefa8aadafe50025e83b6bc23878bc08cd45&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/CRKyyLDJ1ZodwJZ8XC/giphy.gif?cid=790b7611359a2802f1b8a8f5eef5f97e835604811304527d&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/kUrPe5dsjy0zZoslRB/giphy.gif?cid=790b7611a2964c966325426de27838de1b0435c43c4bb06d&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/mUYD2QUAlouKnIq4Mw/giphy.gif?cid=790b76118c13de09f3f2b420fc05f837007dbd638b983468&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/IhlCynuAGo2ndf3zu7/giphy.gif?cid=790b7611dd41989db045cf61b8abe2e6c329c93c66feb1ca&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/BoM7kdhgumtW25eGaO/giphy.gif?cid=790b76113d0565a83ba377da1fc149733621f1f60927bfa4&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/UsLMAkLHmQOVZSNfds/giphy.gif?cid=790b7611025bd8eee8ab9926a8f8e1394abc954c91f2c83b&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/XSdGizUGZnoJMhCC1q/giphy.gif?cid=790b7611ee4c04eb0d56e423de81748833d790f80534bb16&rid=giphy.gif&ct=g",
];

const fightGifs = [
  "https://media3.giphy.com/media/EKPDaVZ3yi2OoP9XjG/giphy.gif?cid=790b76115feabe878700016f6d88c080c8d53adc7e05f205&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/GPTx2yBmC3sGs3xCbq/giphy.gif?cid=790b7611e34b2735e50c3f5945b0a889dd3d8579f082b95c&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/oA9uAcB6uOrUuk4SDb/giphy.gif?cid=790b7611923600e27d2fdc2df326d9acc895cd6577c6fa24&rid=giphy.gif&ct=g",
];
function getRandomGif(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  fightGifs,
  waifuGifs,
  getRandomGif,
};
