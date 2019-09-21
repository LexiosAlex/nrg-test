export default array => {
  const numberOfPosts = array.length;

  return array[Math.floor(Math.random() * numberOfPosts)];
};
