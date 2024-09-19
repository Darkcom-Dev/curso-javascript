class Ticket {
    constructor(denomination, amount) {
        this.denomination = denomination;
        this.amount = amount;
    }
}

cash = [];
cash.push(new Ticket(50,3));
cash.push(new Ticket(20,2));
cash.push(new Ticket(10,2));

delivered = [];
var money = 0;
var cashFlow = 0;
var button = document.getElementById("withdraw");
button.addEventListener("click",testCash);
var p = document.getElementById("resultado");
var innerText = "";

function testCash() {
    var text = document.getElementById("amount");
    var money = parseInt(text.value);
    money = parseInt(text.value);

    for (var c of cash) {
        cashFlow += c.amount * c.denomination;
    }
    console.log(cashFlow);

    if (money % 10 != 0) {
        innerText = "El monto no es denominable";
        p.innerHTML = innerText;
        cashFlow = 0;
    }
    else {
        if (cashFlow >= money) {
            cashFlow -= money;
            console.log("money: " + money + " cash flow: " + cashFlow);
            withdraw(money);

        }
        else {
            innerText = "disponible en caja: " + cashFlow + ", el monto excede el valor en caja";
            p.innerHTML = innerText;
            button.disabled = true;
            cashFlow = 0;
        }
    }
}

function withdraw(_money) {
    for (var ticket of cash) {
        var div = Math.floor(_money / ticket.denomination);
        console.log(div + " x " + ticket.denomination);
        if (div > 0) {
            if (div > ticket.amount) {
                delivered.push(new Ticket(ticket.denomination, ticket.amount));
                cash.splice(ticket);
            }
            else {
                delivered.push(new Ticket(ticket.denomination, div));
                ticket.amount -= div;
            }
        }
        else console.log("div: " + div);
        _money -= div * ticket.denomination;
    }
    money = _money;
    results();
}

function results() {
    p.innerText.value = "";
    innerText = "retiro sarisfactorio <br/>";
    for (var e of delivered) {
        innerText += e.amount + " billetes de $" + e.denomination + "<br/>";
    }
    innerText += "Queda en caja: <br/>"
    for (var c of cash) {
        innerText += c.amount + " billetes de $" + c.denomination + "<br/>";
    }
    p.innerHTML = innerText;
    innerText = "";
    cashFlow = 0;
}