var names = ["Pedro", "Larissa", "Rafael", "Carlos"]

var guestName = prompt("What's your name?")

if (names.includes(guestName)) {
    console.log("Welcome" + guestName)
}else {
    console.log("Your names isn't on list, " + guestName)
}