document.addEventListener("DOMContentLoaded", function() {
  // Check if the body has any child elements. A length of 0 confirms it is empty.
  if (document.body.children.length === 0) {
    console.log("DOM load success");
  }
});
