const involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const postLike = async (id) => {
  const response = await fetch(
    `${involveURL}/apps/AEzJkDXLf7FGXWlpS77t/likes`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  response();
};

const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AEzJkDXLf7FGXWlpS77t/likes',
  );
  const numOfLikes = await response.json();
  return numOfLikes;
};
export { postLike, getLikes };