/* SetTimeout executes the function when the time interval completes */
setTimeout(() => {
    console.log("Hi Imran", Math.floor(Math.random() * 10 + 1));
},3000);

/* SetInterval executes the function repeatedly after each time interval completes  */
setInterval(() => {
    console.log("Hi Imran", Math.floor(Math.random() * 10 + 1));
},3000);

// clearTimeout stops the setTimeout, this can be used when an event is triggered
const stopTimeout = setTimeout(() => {
    console.log("Hi Imran", Math.floor(Math.random() * 10 + 1));
},3000);

clearTimeout(stopTimeout); // to stop or clear the timeout functionality

// clearInterval stops the setInterval, this can be used when an event is triggered
const stopInterval = setInterval(() => {
    console.log("Hi Imran", Math.floor(Math.random() * 10 + 1));
},3000);

clearInterval(stopInterval);