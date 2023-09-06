"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("bp-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("bp-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("bp-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("bp-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("bp-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
