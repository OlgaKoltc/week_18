    const btn = document.querySelector('#send').addEventListener('click',addComment);
    //const btnClean = document.querySelector('#clean').addEventListener('click',cleanComment);
    //const comment = document.querySelector('#comment');
     const comments = [];

//     function cleanComment() {
// checked.innerHTML = " ";
//     }

function addComment(e) {
        e.preventDefault();
        // сохраняем в переменные все необходимые нам данные (url картинки, автора и текст)
        const imageUrl = document.querySelector("#url").value;
        const userName = document.querySelector("#username").value; 
        const commentText = document.querySelector("#comment").value;

        // создаем HTML элементы, из которых будет состоять наш комментарий
        const commentWrap = document.createElement('div');
        const authorWrap = document.createElement('div');
        const commentTextWrap = document.createElement('div');
        const author = document.createElement('span');
        const img = document.createElement("img");

        // добавим им CSS классы, чтобы стилизовать их  
        commentWrap.classList.add('comment');
        authorWrap.classList.add('comment__author');
        commentTextWrap.classList.add('comment__text');
        img.classList.add('comment__avatar');
       
        // теперь добавим данные из переменных в HTML 
        img.src = imageUrl;
        commentTextWrap.innerHTML = commentText;
        author.innerHTML = userName;
        authorWrap.appendChild(img);
        authorWrap.appendChild(author);
        commentWrap.appendChild(authorWrap);
        commentWrap.appendChild(commentTextWrap);
        
        // добавляем вновь сформированный комментарий в заранее подготовленный блок result
        document.getElementById('result').appendChild(commentWrap);
        
        // очищаем все поля 
        document.getElementById("url").value = "";
        document.getElementById("comment").value = "";
        document.getElementById("username").value = "";
        comments.push(userName, imageUrl);
        saveCommentsToLS()
      }
      //const saveCommentsToLS = () => {
        // преобразуем массив в строку
        function saveCommentsToLS() {
        const commentsString = JSON.stringify(comments);
        console.log(commentsString);
        // сохраняем строку в local storage нашего браузера
        localStorage.setItem('comments', commentsString);
      }