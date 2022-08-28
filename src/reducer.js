const initState = {
  list: [],
  completed: [],
  index: -1,
  update: false,
};
const setAction = (type, value) => {
  return {
    type,
    value,
  };
};
function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        list: [action.value, ...state.list],
      };
    case "Update":
      return {
        ...state,
        update: true,
        index: action.value,
      };
    case "UpdateDone":
      return {
        ...state,
        update: false,
        list: state.list.map((e, i) => (i === state.index ? action.value : e)),
      };
    case "Completed":
      return {
        ...state,
        completed: [state.list[action.value], ...state.completed],
        list: state.list.filter((e, i) => i !== action.value),
      };
    case "Delete":
      return {
        ...state,
        list: state.list.filter((e, i) => i !== action.value),
      };
    default:
      throw new Error("Invalid Action")
  }
}

export default reducer;
export { setAction, initState };
