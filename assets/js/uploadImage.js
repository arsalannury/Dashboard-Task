//! variable
const users = getLsUsers()

//! Event listener
document.querySelector('#add').addEventListener('click', () => {
  setUsers(users)
  window.location.href = 'http://localhost:3000/Users.html'
})
document.querySelectorAll('input[type="file"]').forEach((inp, index) => {
  showImage(inp, inp.nextElementSibling, index)
})

//! function

//? Check valid image and set image for display
function showImage (src, target, index) {
  var fr = new FileReader()
  // when image is loaded, set the src of the image where you want to display it
  fr.onload = () => {
    const idUser = window.location.search.slice(4)
    target.src = fr.result
    setImg(idUser, fr.result, index)
  }
  src.addEventListener('change', () => {
    // fill fr with image data
    if (src.files[0].type.startsWith('image')) {
      fr.readAsDataURL(src.files[0])
      src.previousElementSibling.hidden = true
    } else {
      src.previousElementSibling.hidden = false
    }
  })
}

//? set image in localStorage
function setImg (id, img, index) {
  const user = users.find(u => u.id == id)
  user.images[`file${index}`] = img
}
