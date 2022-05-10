export default (list = { msg: null, items: [] }, action) => {
  if (action.type === "GET_NEW_RELEASES_PLAYLISTS") {
    return {
      msg: action.payload.msg,
      items: [...list.items, action.payload.item],
    };
  }
  return list;
};
