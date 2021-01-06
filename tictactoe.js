// Sample Matrix input
const grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

// Function to check Rows
const checkRow = (game) => {

    let i=0;
    let won = 0;

    while(i<game.length){

        let container = game[i];
        let j=0;

        while(j < (container.length-1)){
            if(container[j] == container[j+1]){
                won = won+1;
            }
            else{
                won = won-1;
            }
            j = j+1;
        }

        if(won == game.length-1){
            break;
        }
        i++;
    }
    console.log("Row Check:")
    if(won == game.length-1){
        console.log("won")
    }
    else {
        console.log("lost")
    }
}

// Function to check Columns
const checkCol = (game) => {

    let won = 0;
    let j = 0;

    while(j<game.length){

        let i = 0;

        while(i < (game.length-1)){

            if(game[i][j] == game[i+1][j]){
                won = won + 1;
            }
            else {
                won = won - 1;
            }
            i = i+1;
        }

        if(won == game.length-1){
            break;
        }
        j++;
    }

    console.log("Column Check:")
    if(won == game.length-1){
        console.log("won")
    }
    else {
        console.log("lost")
    }
}

// Function to check Diagnol 1
const checkDiagnol1 = (game) => {

    let i = 0;
    let won = 0;

    while(i < (game.length-1)){
        if(game[i][i] == game[i+1][i+1]){
            won = won+1;
        }
        else{
            won = won-1;
        }
        i = i+1;
    }

    console.log("Diagnol 1 Check:")
    if(won == game.length-1){
        console.log("won")
    }
    else {
        console.log("lost")
    }
    
}

// Function to check Diagnol 2
const checkDiagnol2 = (game) => {
    
    let i = 0;
    let won = 0;
    let j = game.length-1;

    while(i < (game.length-1)){
        if(game[i][j] == game[i+1][j-1]){
            won = won+1;
        }
        else{
            won = won-1;
        }
        i = i+1;
        j = j-1;
    }

    console.log("Diagnol 2 Check:")
    if(won == game.length-1){
        console.log("won")
    }
    else {
        console.log("lost")
    }
}

// Calling the funtions
checkRow(grid)
checkCol(grid)
checkDiagnol1(grid)
checkDiagnol2(grid)












