"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
;
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 1] = "small";
    Sizes[Sizes["medium"] = 2] = "medium";
    Sizes[Sizes["large"] = 3] = "large";
})(Sizes || (Sizes = {}));
;
var size;
(function (size) {
    size["small"] = "1";
    size["medium"] = "m";
    size["large"] = "i";
})(size || (size = {}));
;
;
let mysize = 2;
console.log(mysize);
//# sourceMappingURL=enums.js.map