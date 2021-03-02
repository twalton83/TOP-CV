function addItem(state, key, item) {
  return { ...state, [key]: [...state[key], item] }
}

function deleteItem(state, key, { id }) {
  return { ...state, [key]: state[key].filter((item) => item.id !== id) }
}

function editItem(state, { id, edits }) {
  const itemToEdit = state.filter((item) => item.id === id)
  const uneditedItems = state.filter((item) => item.id !== id)
  itemToEdit.edit(edits)
  return [...uneditedItems, itemToEdit]
}

function reducer(state, action) {
  const { type, key, payload } = action
  switch (type) {
    case "add": {
      return addItem(state, key, payload)
    }
    case "delete": {
      return deleteItem(state, key, payload)
    }
    case "edit": {
      return editItem(state, payload)
    }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
