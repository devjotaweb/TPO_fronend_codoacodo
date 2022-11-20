const apiUrl = 'https://thronesapi.com/api/v2/Characters';
const xx = document.createDocumentFragment("xx");
const htmlResponse = document.querySelector("got");

fetch('{$apiUrl}/users')
    .then((response)=> response.json())
    .then((users)); {
        users.forEach(element => {
            let elem = document.createElement('li');
            elem.appendChild(
                (document.createTextNode('${users.firstName}${users.id}'))
            );
            xx.appendChild(elem);
        });

        htmlResponse.appendChild(xx);
    };

/*
{
  "id": 0,
  "firstName": "string",
  "lastName": "string",
  "fullName": "string",
  "title": "string",
  "family": "string",
  "image": "string",
  "imageUrl": "string"
}*/



