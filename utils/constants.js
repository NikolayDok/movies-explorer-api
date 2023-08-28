const regExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

const REQUEST_SUCCESSFUL_CODE = 200;
const CREATED_SUCCESSFUL_CODE = 201;
const DUPLICATE_KEY_CODE = 11000;

module.exports = {
  regExUrl,
  REQUEST_SUCCESSFUL_CODE,
  CREATED_SUCCESSFUL_CODE,
  DUPLICATE_KEY_CODE,
};