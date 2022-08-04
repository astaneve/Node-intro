fetch("http://localhost:8080/names")
.then((resp) = resp.json())
.then((response) => {
console.log(response);
const ul = document.createElement("ul");
// [ { name: "Asta" }, {} ]
response.forEach((user) => {
    const li = document.createElement("li"); //<li></li>
    li.textContent = `${user.name} ${user.surname}`;
    ul.append(li) //<ul><li>Asta</li></ul>
});
document.body.append(ul);
})
.catch((error) => console.error(error));