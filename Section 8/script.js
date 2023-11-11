/*
What is JS?
- High level
- Garbage collected
- Interpreted or JIT (Just in time) compiled
- Multi-paradigm
    Paradigm - An approach and midset of structuring code which will direct your coding style and technique.
    Example:
        1. Procedural
        2. OOP
        3. Functional Programming (FP)
    JS can do all above
- Prototype-based object oriented
    Almost everything in JS is an object except primitive values.
- First-class functions
    In a language with first-class functions, functions are simply treated as variables.
    We can pass them into other functions, and return them from functions.
- Dynamic
    (No data types is defined.)
- Single threaded
    Concurrency model - How the JS engine handles multiple tasks happening at the same time.
    JS runs in one single thread, so it can only do one thing at a time.
    But JS uses event loops below:
- Event loop concurrency model
    - This takes log running tasks, executes them in the "backgroup", and puts them back in the main thread once they are finished.
*/

/*
JS Engine - Program that executes JS code.
example: Chrome - V8 Engine

A JS Engine always contains an call stack and heap.
    Stack - Where the code is executed
    Heap - Where objects are stored

Compilation vs Interpretation
    Compilation - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
    Source code ---- compilation ----> Portable file (Mahine code) ---- Execution ----> Program running

    Interpretation - Interpreter runs through the source code and executes it line by line.
    Source code ---- Execution line by line ----> Program running

    Modern JS engine uses mix of interpretation and compilation which now is called JIT.
    Source code ---- Compilation ----> Machine code (no source file) ----> Execution ----> Program running
    Here JIT does not create a portable file and execution happens immediately.

    Steps:
    1. Parsing
    2. Compilation
    3. Execution

    Code is parsed into an AST (Abstarct syntax tree)
    - Read the code
    - Parsed into AST
    - Split each line of code into multiple peices like const keywords that are meaningful to the language.
        and saving into a tree in a structured way 
    - This tep also checks for syntax errors.
    - Resulting tree will be used to generate machine code

    2. Compilation - This take the generated AST and compiles into machine code.

    3. Execution - The AST then is immediately executed.

    JS creates an unoptimized machine code and during execution it keeps recompiling and optimize the code.
    
    Lexical scopring = Scoping is controlled by placement of functions and blocks in the code

    Types of scope
    Global - Top level
    Function - Local / inside functions
    Black - Every thing inside curly braces from ES6 (only let and const, var will be global still)

    If strict mode is turned off then variables can then be used outside score as well

    Hoisting - This makes some variables be accessible/usable in the code before they are actually declared."Variables lifted to the top of the scope"

    Type       |Hoisted|   Initial Value   |   Scope
    Function    |   Y   |   Actual Function |   Black
    var         |   N   |   undefnied       |   Function
    let/const   |   N   |<uninitialized>,TDZ|   Block
    
    function/expression/arrow function - Depends on how they are defined 

    TDZ - Temporal Dead Zone

    *** this -> Special variable that is created for every execution context (every function).
    Takes value of (points to) the "owner" of the function in which this keyword is used.
*/
"use strict";

if (1===1)
{
    var blockScope = 'Blockvar';
}

function parentFunc()
{
    console.log("Parent");
    function childFunction() {
        var childVar = 'ChildVar';
        console.log("Child");
    }
    childFunction();
}

parentFunc();
console.log(blockScore);
// childFunction(); // This does not work as the child function is also block scoped starting ES6
// console.log(childVar);
