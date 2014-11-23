var Konami = (function () {
    function Konami(sequence) {
        if (!sequence) {
            sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].join();
        }
        this.sequence = sequence;
        this.thusFar = '';
    }
    Konami.prototype.latchTo = function (victim) {
        if (this.victim) {
            throw new Error();
        }
        this.victim = victim;
        victim.addEventListener('keyup', this.keyPressed.bind(this));
    };
    Konami.prototype.check = function () {
        return this.thusFar.indexOf(this.sequence) > -1;
    };
    Konami.prototype.activate = function () {
        var iterator = document.createNodeIterator(this.victim, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) { return node.nodeValue.trim().length ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
        });
        var node;
        while (node = iterator.nextNode()) {
            node.nodeValue = node.nodeValue.replace(/\w+/g, 'Banana');
        }
    };
    Konami.prototype.keyPressed = function (evt) {
        this.thusFar += evt.which + ',';
        if (this.check()) {
            this.activate();
        }
    };
    return Konami;
})();
var konami = new Konami();
konami.latchTo(document);
