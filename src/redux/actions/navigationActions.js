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

function replace(pageId, params) {
  params = params || {};

  return {
    type: 'REPLACE_ROUTING',
    pageId,
    params
  };
}

module.exports = { navigateTo, navigateBack, replace };