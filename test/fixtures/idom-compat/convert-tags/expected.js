function render() {
    [].map(y => function () {
        elementOpen("div", "i", ["class", "foo"], "x", y);
        elementOpen("span", "i", []);
        elementOpen("i", "i", []);
        text("a");
        elementClose("i");
        elementOpen("ul", "i", []);
        elementOpen("li", "i", []);
        text("Hi: ");
        r();
        r();
        text("2");
        text("123");
        _g;
        elementClose("li");
        elementClose("ul");
        elementClose("span");
        elementClose("div");
    });
}
