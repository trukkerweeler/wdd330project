let key = '455d6aef42msh9006e3c78cd42d9p1bad46jsn6312ae8f1fc2';			//  rapid API

function getData() {
    //  the user has entered a conference into the entry field -- east, west, utah, sacromento
    // let conference = document.getElementById('conference').value;

    fetch(`https://car-api2.p.rapidapi.com/api/engines?verbose=yes&direction=asc&sort=id&make=FORD&year=2020&engine_type=hybrid`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "car-api2.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)

        // const quote = response.content;
        // console.log(make);
        console.log(response.data[0].cylinders);
        console.log(response.data[0].engine_type);
    })    
    .catch(err => {console.error(err);
    });

}

getData();


function getMakes() {
    document.getElementsByClassName('dropdown').classlist.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-item");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// const url = 'rapidapi.com';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '455d6aef42msh9006e3c78cd42d9p1bad46jsn6312ae8f1fc2',
// 		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//   const select = dropdown.querySelector('.select');
//   const caret = dropdown.querySelector('.caret');
//   const menu = dropdown.querySelector('.menu');
//   const options = dropdown.querySelectorAll('.menu li');
//   const selected = dropdown.querySelector('.selected');

//   select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');
//     menu.classList.toggle('menu-open');
//     console.log("clicked");
//   });

//   options.forEach(option => {
//     option.addEventListener('click', () => {
//       selected.innerText = option.innerText;
//       select.classList.remove('select-clicked');
//       caret.classList.remove('caret-rotate');
//       menu.classList.remove('menu-open');
//       options.forEach(option => {
//         option.classList.remove('active');
//       });
//       option.classList.add('active');
//     });
//   });
// });