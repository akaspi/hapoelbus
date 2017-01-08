function navigateTo(pageId, params) {
  params = params || {};

  return {
    type: 'NAVIGATE_TO',
    pageId,
    params
  };
}

function navigateBack() {
  return {
    type: 'NAVIGATE_BACK'
  };
}

function reset(pageId, params) {
  params = params || {};

  return {
    type: 'RESET_ROUTING',
    pageId,
    params
  };
}

function replace(pageId, params) {
  return {
    type: 'REPLACE_ROUTING',
    pageId,
    params
  };
}

module.exports = { navigateTo, navigateBack, replace, reset };