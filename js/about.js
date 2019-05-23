class Tab {
    constructor(tab) {
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        if (this.data === 'all') {
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab=${this.data}]`);
        }

        this.cards = Array.from(this.cards).map((card) => {
            return new Card(card);
        });

        this.tab.addEventListener('click', () => {
            this.selectTab();
        });
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = 'none';
        })
        this.tab.classList.add('active');
        this.cards.forEach(card => card.selectCard());
    }
}

class Card {
    constructor(card) {
        this.card = card;
    }
    selectCard() {
        this.card.style.display = 'flex';
    }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    new Tab(tab);
});