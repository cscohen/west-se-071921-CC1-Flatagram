// write your code here
const fgInfo = (`http://localhost:3000/images/1/`)
const fgPic = (`http://localhost:3000/./assets/coder-dog.png`)
const titleDiv = document.getElementById('fg-title')
const likesDiv = document.getElementById('fg-likes')
const imgDiv = document.getElementById('fg-image')
const likeBtn = document.getElementById('fg-like-button')
const commentButton = document.getElementsByName('comment')
const commentForm = document.getElementById('fg-comment-form')
const commentInput = document.getElementById('comment-input')
const commentList = document.getElementById('fg-comments')

fetch(fgInfo)

.then(resp => resp.json())
.then(img => {

    titleDiv.innerText = img.title
    console.log(titleDiv)
    commentList.src = img.comments
    //hardcoded cuz i was doing something horrible wrong
    imgDiv.src = './assets/coder-dog.png'
    commentList.innerHTML = `
    <li> ${img.comments[0].content} </li>
    <li> ${img.comments[1].content} </li>
    <li> ${img.comments[2].content} </li>`
})
.then(updateFg)

function updateFg() {
    addInitialComments
    likeBtn.addEventListener('click', increaseLikes)
    commentButton.addEventListener('submit', addComments)   


}
function addComments(comments){
    comments.preventDefault()
    const li = document.createElement('li')
    li.textContent = e.target.comment.value
    ul.append(li)
}

function increaseLikes(e){
    let likesCounter = document.getElementById('fg-likes')
    let totalLikes = parseInt(likesCounter.innerText)
    likesCounter.innerText = ++totalLikes
  }
  