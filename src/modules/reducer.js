function addItem(state, key, item) {
  return { ...state, [key]: [...state[key], item] }
}

function deleteItem(state, key, { id }) {
  return { ...state, [key]: state[key].filter((item) => item.id !== id) }
}

function editItem(state, key, { id, edits }) {
  const itemToEdit = state[key].filter((item) => item.id === id)[0]
  const uneditedItems = state[key].filter((item) => item.id !== id)
  itemToEdit.edit(edits)
  return { ...state, [key]: [...uneditedItems, itemToEdit] }
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
      return editItem(state, key, payload)
    }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
