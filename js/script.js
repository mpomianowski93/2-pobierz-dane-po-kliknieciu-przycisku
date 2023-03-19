console.log('AJAX - Warsztat - Pobierz dane po kliknięciu przycisku');


let btnGetData = document.querySelector('.get-data');

const getData =  () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let puserId = document.createElement('p');
            let ptitle = document.createElement('p');
            let pbody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.id}`;
            puserId.innerText = `User ID ${data.userId}`;
            ptitle.innerText = `Title: ${data.title}`;
            pbody.innerText = `Body: ${data.body}`;


            document.body.appendChild(pId);
            document.body.appendChild(puserId);
            document.body.appendChild(ptitle);
            document.body.appendChild(pbody);
            document.body.appendChild(hr);

            
        })
        .catch(error => {
            console.error(error);
        })

   
}

btnGetData.addEventListener('click', getData);