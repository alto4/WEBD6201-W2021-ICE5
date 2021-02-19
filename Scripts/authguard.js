"use strict";

(() => {
  // check if a user is not logged in
  if (!sessionStorage.getItem("user")) {
    // redirect to secure area
    location.href = "login.html";
  }
})();
