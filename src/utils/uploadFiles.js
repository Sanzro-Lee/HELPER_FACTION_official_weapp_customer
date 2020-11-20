function selectFiles() {
  document.querySelector(".van-uploader__preview-image").addEventListener("change", function(e) {
      console.log(this);
    });
}

export { selectFiles };
