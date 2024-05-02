let computerChoice = 'Hello';
        let resultMsg = ''
        let randomnumber = Math.random() *3;
        if (randomnumber>0 && randomnumber<1){
            computerChoice = 'Rock'
        } else if ( randomnumber>1 && randomnumber<2){
            computerChoice = 'Paper'
        } else {
            computerChoice = 'Scissors'
        }


