
const demo = document.getElementById('demo');

async function fetchData(){
    const response = await fetch("jsonData.txt");

    const data = await response.json();

    demo.innerText = data;
}