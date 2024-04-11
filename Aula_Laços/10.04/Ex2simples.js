let i = 11

while (i >= 1){
    i--
    console.log(i)
    if ( i === 0){
        console.log(`!BOOOOOOM!`)
    } else if (i%2 === 0){
        console.log(`TIC`)
    } else {
        console.log(`TAC`)
    } 
}