function addItem(state, key, item) {
  return { ...state, [key]: [...state[key], item] }
}

function deleteItem(state, key, { id }) {
  return { ...state, [key]: state[key].filter((item) => item.id !== id) }
}

function editItem(state, key, { id, edits }) {
  const items = state[key].map((item) => {
    if (item.id === id) {
      item.edit(edits)
    }
    return item
  })
  return { ...state, [key]: items }
}

function editSkills(state, { id, edit }) {
  const skills = state.skills.map((skill) => {
    if (skill.id === id) {
      skill.name = edit
    }
    return skill
  })
  return { ...state, skills: [...skills] }
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
    case "editSkill": {
      return editSkills(state, payload)
    }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
