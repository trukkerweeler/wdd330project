const url = "https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id";
let key = "455d6aef42msh9006e3c78cd42d9p1bad46jsn6312ae8f1fc2"; //  rapid API

function getMakes() {
  // let myMake = document.getElementById('conference').value;

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "car-api2.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // response.data.forEach(make => {
      //   console.log(make.name)
      // });

    })
    .catch((err) => {
      console.error(err);
    });
}

getMakes();
