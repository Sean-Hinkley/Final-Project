
class BlackJack {
    constructor() {
        this.Deck = new Deck();
        this.Deck.makeDeck();
    }


    dealCards() {

    }
}


class Hand {
    constructor() {
        this.cards = [];
    }


}





class Deck {
    
    constructor() {
        this.cards = [];

        this.makeDeck();
    }

    

    remove(suit,value) {
        let count = 0;
        while(count < this.cards.length) {
            let tmp = this.cards[count];
            console.log(count);
            if(tmp.getSuit() == suit && tmp.getValue() == value) {
                console.log(count);
                this.cards.splice(count,1);
                this.drawDeck();
                break;
            }
            
            count++;
        }
    }

    add(card) {
        this.cards.push(card);
    }


    makeDeck() {
        for(let x = 0; x < 4; x++) {
            for(let y = 0; y < 13; y++) {
                let tmp = new card(x,y);   
                this.cards.push(tmp); 
            }
        }
        
        

        this.shuffle();

        
        
    }

    shuffle() {
        
        for(let s = 0; s < this.cards.length; s++) {
            
            let f = Math.random() * this.cards.length;
            f = Math.round(f);
            console.log(f);
            let tmp = this.cards[s];
            this.cards[s] = this.cards[f];
            this.cards[f] = tmp;
            
        }
        
    }


    drawDeck() {
        let result = ``;
        for(let x = 0; x < this.cards.length; x++) {
            if(this.cards[x]!=null) {
                result+=this.cards[x].draw();
            }
        }
        console.log(result);
        document.getElementById("dealer").innerHTML = result;
    }
    
}

class card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;

        
    }


    draw() {
        let result = ``;
        let c = this.getColor();
        console.log(c);
        result+=`<div class=\"text-center card col ${c} \"><h2>${this.value}</h2></div>`

        return result;

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
f.drawDeck();