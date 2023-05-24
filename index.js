require("dotenv").config(); // Used to pass API_KEY
const city = "Sousse";

// fetching data using axios

const axios = require("axios").default;
axios({
	method: "get",
	url:
		`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&q=` +
		city,
})
	.then((res) => {
		console.log("\nUsing AXIOS : \n");
		console.log("City: " + res.data.name);
		console.log("Weather: " + res.data.weather[0].main);
		console.log("Weather description: " + res.data.weather[0].description);
		console.log("Temperature: " + res.data.main.temp);
		console.log("Humidity: " + res.data.main.humidity);
		console.log("Wind Speed: " + res.data.wind.speed);
	})
	.catch((err) => console.log(err));


// fetching data using REQUEST

const request = require("request");
request(
	`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&q=` +
		city,
	function (error, response, body) {
		if (error) {
			console.error("error:", error);
			console.log("statusCode:", response && response.statusCode);
		}

		const weatherData = JSON.parse(body);
		// console.log(weatherData);
		console.log("\nUsing request : \n");
		console.log("City: " + weatherData.name);
		console.log("Weather: " + weatherData.weather[0].main);
		console.log("Weather description: " + weatherData.weather[0].description);
		console.log("Temperature: " + weatherData.main.temp);
		console.log("Humidity: " + weatherData.main.humidity);
		console.log("Wind Speed: " + weatherData.wind.speed);
	}
);
