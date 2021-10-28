//! Event listener
document.addEventListener('DOMContentLoaded', () => {
  appendImages(getImages())
})
document.querySelector('#add').addEventListener('click', () => {
  setUsers(users)
  window.location.href = 'http://localhost:3000/Users.html'
})
document.querySelectorAll('input[type="file"]').forEach((inp, index) => {
  showImage(inp, inp.nextElementSibling, index)
})

//! variable
const users = getLsUsers()
const idUser = window.location.search.slice(4)
const user = users.find(u => u.id === Number(idUser))

//! function

//? Check valid image and set image for display
function showImage (src, target, index) {
  var fr = new FileReader()
  // when image is loaded, set the src of the image where you want to display it
  fr.onload = () => {
    target.src = fr.result
    setImg(fr.result, index)
  }
  src.addEventListener('change', () => {
    const label = src.previousElementSibling
    // fill fr with image data
    if (src.files[0].type.startsWith('image')) {
      fr.readAsDataURL(src.files[0])
      label.hidden = true
    } else {
      label.hidden = false
    }
  })
}

//? set image in localStorage
function setImg (img, index) {
  user.images[`file${index}`] = img
}
//? get image in localStorage
function getImages () {
  let allImages = {}
  for (const key in user.images) {
    const img = new Image()
    img.src = user.images[key]
    allImages[key] = img
  }
  return allImages
}
//? append images in body
function appendImages (images) {
  for (const key in images) {
    // get index input file
    const indexItem = key.substr(-1)
    const img = document.querySelector(`#formFile_${indexItem}`).nextElementSibling
    document.querySelector(`#formFile_${indexItem}`).previousElementSibling.hidden = true
    img.parentNode.replaceChild(images[key], img)
  }
}
