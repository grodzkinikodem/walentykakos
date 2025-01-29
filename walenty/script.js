document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response").textContent = "Jesteś moją walentynką! ❤️";
    document.getElementById("response").style.color = "green";
    document.getElementById("response").classList.add("visible");

    // Ukryj wkurzoną emotkę, pokaż szczęśliwą
    document.getElementById("angry-emoji").style.opacity = 0;
    document.getElementById("happy-emoji").style.opacity = 1;

    // Zmiana rozmiaru kontenera
    document.getElementById("container").classList.add("smaller");
    document.getElementById("question").classList.add("smaller");
    document.getElementById("buttons").classList.add("smaller");

    // Otwórz nową kartę z odpowiednią stroną po kliknięciu "Tak"
    window.open("https://www.example.com/positive", "_blank");
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("response").textContent = "Nieznana odpowiedź, proszę wybrać ponownie! 🤔";
    document.getElementById("response").style.color = "red";
    document.getElementById("response").classList.add("visible");

    // Ukryj szczęśliwą emotkę, pokaż wkurzoną
    document.getElementById("happy-emoji").style.opacity = 0;
    document.getElementById("angry-emoji").style.opacity = 1;

    // Zmiana rozmiaru kontenera
    document.getElementById("container").classList.add("smaller");
    document.getElementById("question").classList.add("smaller");
    document.getElementById("buttons").classList.add("smaller");

    // Otwórz nową kartę z odpowiednią stroną po kliknięciu "Nie"
    window.open("https://www.example.com/negative", "_blank");
});
