// a ist immer die richtige Antwort
let fragen = [{
    frage: 'Wie lang ist mein Penis?',
    antwort: ['20m', '10cm', '30mm', 'Bin eine Frau :(']
}, {
    frage: 'Pespi oder Cola?',
    antwort: ['Pespi', 'Pepsi', 'Kola', 'Bin eine Frau :(']
}, {
    frage: 'Test',
    antwort: ['bla', '10cm', '30mm', 'Bin eine Frau :(']
}];


let punktestand = 0;
function antwort(dom, isTrue) {
    if(isTrue) {
        console.log('Antwort ist richtig');
        punktestand++;
        console.log(punktestand);
        if(punktestand==20) {
            console.log('Gewonnen');
            //Wenn gewonnen auf Neue Seite mit Statistiken
        }
    } else {
        console.log('Antwort ist falsch');

    }
}