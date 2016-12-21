function navigateTo(pageId) {
  return { type: 'NAVIGATE_TO', pageId }
}

function navigateBack() {
  return { type: 'NAVIGATE_BACK' }
}

function replace(pageId) {
  return { type: 'REPLACE_NAVIGATION', pageId }
}

module.exports = { navigateTo, navigateBack, replace };