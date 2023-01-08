
let billTotalInp = document.getElementById('billTotalInput')
let tipInp = document.getElementById('tipInput')
let noPeople = document.getElementById('numberOfPeople')
let perPersonTtl = document.getElementById('perPersonTotal')





// Get number of people from number of people div
let noOfPeople = Number(noPeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billTotalInp.value)

    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPerc = Number(tipInp.value) / 100

    // get the total tip amount
    const totalTipAmt = bill * tipPerc

    // calculate the total (tip amount + bill)
    const total = bill + totalTipAmt

    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / noOfPeople

    // update the perPersonTotal on DOM & show it to user
    perPersonTtl.innerText = `${perPersonTotal.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    noOfPeople += 1

    // update the DOM with the new number of people
    noPeople.innerText = noOfPeople

    // calculate the bill based on the new number of people
    calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(noOfPeople <= 0){
        return
    }

    // decrement the amount of people
    noOfPeople -= 1

    // update the DOM with the new number of people
    noPeople.innerText = noOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}