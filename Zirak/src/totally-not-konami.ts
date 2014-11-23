class Konami {
    sequence:string;
    thusFar:string;
    victim:Node;

    constructor(sequence?:string) {
        if (!sequence) {
            sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].join();
        }

        this.sequence = sequence;
        this.thusFar  = '';
    }

    latchTo(victim:Node) {
        if (this.victim) {
            throw new Error();
        }

        this.victim = victim;
        victim.addEventListener('keyup', this.keyPressed.bind(this));
    }

    check() {
        return this.thusFar.indexOf(this.sequence) > -1;
    }

    activate() {
        var iterator:NodeIterator = document.createNodeIterator(
            this.victim,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode : (node) => node.nodeValue.trim().length ?
                        NodeFilter.FILTER_ACCEPT :
                        NodeFilter.FILTER_REJECT
            }
        );

        var node:Node;

        while (node = iterator.nextNode()) {
            node.nodeValue = node.nodeValue.replace(/\w+/g, 'Banana');
        }
    }

    keyPressed(evt: KeyboardEvent) {
        this.thusFar += evt.which + ',';

        if (this.check()) {
            this.activate();
        }
    }
}

var konami = new Konami();
konami.latchTo(document);
