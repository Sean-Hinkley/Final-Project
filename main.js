
class BlackJack {
    PlayerScore;
    DealerScore;
    Deck;
    Player;
    Dealer;
    Playerloc;
    Dealerloc;
    constructor() {
        this.PlayerScore = 0;
        this.DealerScore = 0;
        this.Playerloc = ["player", "plvalue", "playerScore"];
        this.Dealerloc = ["dealer", "dlvalue", "dealerScore"];
        this.Deck = new Deck("deck");

        this.Player = new Hand();
        this.Dealer = new Hand();



        var r = document.getElementById("deal");
        r.addEventListener('click', this.dealCards.bind(this));
        
        
    }




    dealCards() {
        this.clearDeck();

        
        this.Player.addCard(this.Deck.takeOffTop());
        this.Player.addCard(this.Deck.takeOffTop());
        

        this.Dealer.addCard(this.Deck.takeOffTop());
        this.Dealer.addCard(this.Deck.takeOffTop());
        this.whoWins();
        this.draw();
        
    }  

    draw() {
        
        let x = this.Player.draw();
        document.getElementById(this.Playerloc[0]).innerHTML = x;
        let y = this.Player.checkValue();
        document.getElementById(this.Playerloc[1]).innerHTML = y;

        document.getElementById(this.Playerloc[2]).innerHTML = this.PlayerScore;

        
        x = this.Dealer.draw();
        document.getElementById(this.Dealerloc[0]).innerHTML = x;
        y = this.Dealer.checkValue();
        document.getElementById(this.Dealerloc[1]).innerHTML = y;


        document.getElementById(this.Dealerloc[2]).innerHTML = this.DealerScore;
    }




    whoWins() {
        let d = this.Dealer;
        let p = this.Player;
        if(p.checkValue()>d.checkValue()) {
            this.PlayerScore++;
        }
        else if(p.checkValue()<d.checkValue()) {
            this.DealerScore++;
        }
    }


    clearDeck() {
        this.Dealer.clearHand();
        this.Player.clearHand();
    }
}

class Hand {
    Hand;
    Value;
    
    constructor() {
        this.Hand = [];
        this.Value = 0;
        
    }

    addCard(card) {
        this.Hand.push(card);
    }

    clearHand() {
        this.Hand = [];
    }

    checkValue() {
        let val = 0;
        for(let cards = 0; cards < this.Hand.length; cards++) {
            val+=this.Hand[cards].getValue();
        }
        return val;
    }

    draw() {
        let result = ``;
        for(let cards = 0; cards < this.Hand.length; cards++) {
            
            let tmp = this.Hand[cards];
            if(tmp!=null) {
                result+=tmp.draw();
            }
        }
        return result;
        
    }

    changeValues(result) {
        document.getElementById("player").innerHTML = result;

        document.getElementById("plvalue").innerHTML = "Value: " + this.checkValue();
    }

}





class Deck {
    length;
    constructor() {
        this.length = 0;

        this.makeDeck();

    }


    makeDeck() {
        let tmp = [];

        for(let x = 0; x < 4; x++) {
            for(let y = 0; y < 13; y++) {
                tmp.push(new Card(x,y,null));
            }
        }

        for(let z = 0; z < tmp.length; z++) {
            let x = Math.round(Math.random()*tmp.length);

            let tmp1 = tmp[x];
            if(tmp1!=null) {
                tmp.splice(x,1);
                let s = tmp1.getSuit();
                let v = tmp1.getValue();
                this.addCard(s,v)
            }
        }

    }

    addCard(suit,value) {
        let tmp = new Card(suit,value,this.top);

        this.top = tmp;

        this.length++;

        
    }

    takeOffTop() {
        let tmp = this.top;
        this.top = this.top.next;
        console.log(tmp);
        return tmp;
    }


    
}

class Card {
    next;
    value;
    suit; 
    vis;
    constructor(suit, value,next) {
        this.next = next;
        this.value = value;
        this.suit = suit; 
        this.vis = true;
    }
    getValue() {
        return this.value;
    }

    getSuit() {
        return this.suit;
    }
    getColor() {
        if(this.suit == 0) {
            return 'green';
        }
        else if(this.suit == 1) {
            return 'red';
        }
        else if(this.suit == 2) {
            return 'blue';
        }
        else if(this.suit == 3) {
            return 'yellow';
        }
    }

    getNext() {
        return this.next;
    }


    draw() {
        if(this.vis==true) {
            let a = this.getValue();
        
            let result = `<div class="card col-3 v-${a} ${this.getColor()}"><h1>${a}</h1></div>`

            

            return result;
        }
        
    }
}


let blackJack = new BlackJack();














/*class card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.visibility = false;
        
        
    }


    draw() {
        if (this.visibility == false) {
            let result = ``;

            result+=`<div class=\"text-center col-3 card \"><h2>|| ^ W</h2></div>`

            return result;
        }
        
        else if(this.visibility == true) {
            let result = ``;
            let c = this.getColor();

            result+=`<div class=\"text-center col-3 ${c} card \"><h2>${this.value}</h2></div>`

            return result;
        }

    }


    getColor() {
        if(this.suit==0) { 
            return `green`;
        }
        else if(this.suit==1) {
            return `red`;
        }
        else if(this.suit==2) {
            return `blue`;
        }
        else if(this.suit==3) {
            return `yellow`;
        }

        else if(this.suit==-1) {
            return 'null';
        }
    }  
    
    getSuit() {
        return this.suit;
    }

    getValue() {
        return this.value;
    }

    
}


let f = new Deck();
f.makeDeck();
let c = new card(2,5);

let blackJack = new BlackJack();

blackJack.dealCards();*/