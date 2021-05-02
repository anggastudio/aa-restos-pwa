const StarsCounter = {

  count(rating) {
    const ratingCount = Math.floor(rating);
    const starsOn = '★'.repeat(ratingCount);
    const starsOff = '☆'.repeat(5 - ratingCount);
    return { starsOn, starsOff };
  },

};

export default StarsCounter;
