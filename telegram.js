function send() {
    let username = document.getElementById("username")
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let time1 = document.getElementById("time1");
    let time = document.getElementById("time");
    let name = document.getElementById("name");
    let kg = document.getElementById("kg");
    sendtelegram(`Ismi: ${username.value};`);
}

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6802679537:AAEWakvg1nMFrsOY-acCkUHFgeyix9pmWi8"; let chat_id = 1926484196; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };
//api.telegram.org/bot6802679537:AAEWakvg1nMFrsOY-acCkUHFgeyix9pmWi8/getUpdates