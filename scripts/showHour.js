let hour = new Date();
export let current_time = hour.getHours()+":"+hour.getMinutes()
document.getElementById("hour").innerHTML = current_time;


