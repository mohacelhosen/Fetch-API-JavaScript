const tbody = document.querySelector("#tbody"); 
console.log(tbody);


const API_URL = "https://dummyjson.com/users";

async function getData(API_URL){
    try {
        const responseStream = await fetch(API_URL);
        if(!responseStream.ok){
            throw new Error(`Error Occure whilre retrive, ${responseStream.status}`)
        }
        const jsondData = await responseStream.json();
        return jsondData;
    } catch (error) {
        console.error(error);
    }
}


getData(API_URL)
    .then((data) => {
        const users = data.users;
        let userName = users.map((user) => user.username);
        
        users.forEach((user) => {
            const row = document.createElement("tr");

            const td1 = document.createElement('td')
            td1.textContent = `${user.username}`;

            const td2 = document.createElement('td')
            td2.textContent = `${user.gender}`;

            const td3 = document.createElement('td')
            td3.textContent = `${user.age}`;

            const td4 = document.createElement('td')
            td4.textContent = `${user.height}`;

            const td5 =document.createElement('td');
            td5.textContent=`${user.birthDate}`

            const university= document.createElement('td');
            university.textContent=`${user.university}`

            row.appendChild(td1);
            row.appendChild(university);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);

            tbody.appendChild(row);
        });
    });