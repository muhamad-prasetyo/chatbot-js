function talk() {


    // this are the chats and replies you can add more accordingly 
    var know = {
        "hay" : "Hello, I'am ChatBot..",
        "hi" : "Hello, I'am ChatBot..",
        "hello" : "Hello, I'am ChatBot..",
        "Bye" : "Okay! We Will meet soon...",
        "thanks" : "Okay! We Will meet soon...",
        "thank" : "Okay! We Will meet soon...",
        "terimahkasih" : "Okay! We Will meet soon...",
        "suwun" : "Okay! We Will meet soon...",
        "makasih" :"Okay! We Will meet soon...",
    };

    var user = document.getElementById('userBox').value.toLowerCase();
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if(user in know )
    {
        // if user enters question andd you have answer
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } 
    else {
        // else the bot will say "sorry i didn't understand"
        document.getElementById('chatLog').innerHTML = "Maaf, Masukan Kata yang jelas! <br>";
    }

}
