// const display = document.getElementById('display');

// function getData(){
//     fetch("http://127.0.0.1:5500/practice/api/data.txt")
//     .then(res => res.text())
//     .then(data => {
//         display.innerText = data;
//     });
// }

// Upper method is promise method

const display = document.getElementById('display');

async function getData(){
  const res = await fetch("http://127.0.0.1:5500/practice/api/data.txt");

  const data = await res.text();

  display.innerText = data;
}


// This is async method

