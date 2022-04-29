const HtmlReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_FORM":
      return { ...action.payload };
    default:
      return state;
  }
};
export default HtmlReducer;
