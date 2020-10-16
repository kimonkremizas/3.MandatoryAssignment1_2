let inputElement:HTMLInputElement = <HTMLInputElement> document.getElementById("myInput")
let buttonElement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("myButton")
let table:HTMLTableElement = <HTMLTableElement>document.getElementById("Table")
let counter:number = 1;

function ConvertToUpper(stringToConvert: string): string{
    stringToConvert = stringToConvert.toUpperCase()
    return stringToConvert
}

function ConvertToLower(stringToConvert: string): string{
    stringToConvert = stringToConvert.toLowerCase()
    return stringToConvert
}

function manipulateAndAddString(){
    let newRow:HTMLTableRowElement = <HTMLTableRowElement> table.insertRow(-1)
    let id:HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(0)
    let originalString: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(1)
    let manipulatedString: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(2)
    let conversion: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(3)
    let inputText = (<HTMLInputElement>inputElement).value
    let dropdown: HTMLSelectElement = <HTMLSelectElement> document.getElementById("dropdown")
    let option: HTMLOptionElement = dropdown.options[dropdown.selectedIndex]
    
    id.innerHTML = counter.toString()
    originalString.innerHTML = inputText
    if (option.getAttribute("id") == "uppercase"){
        manipulatedString.innerHTML = ConvertToUpper(inputText)
        conversion.innerHTML = "!!! UPPERCASE !!!"
    }
    if (option.getAttribute("id") == "lowercase"){
        manipulatedString.innerHTML = ConvertToLower(inputText)
        conversion.innerHTML = "...lowercase..."
    }    
    counter++
}

document.getElementById("myButton").addEventListener("click", manipulateAndAddString)