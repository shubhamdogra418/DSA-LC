/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let token of tokens) {
        //only taking numbers
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else if (token === "/") stack.push(parseInt(a / b)); //dont wan't float values, truncate it to 0
        }
    } return stack.pop();

};