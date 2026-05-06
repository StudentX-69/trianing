const calculateTemp = () => {
    const NumberTemp = parseFloat( document.getElementById('temp').value);
    const tempslected = document.getElementById('temp_diff');
    const valueTemp = tempslected.value;

    const celToFah = (cel) =>  Math.round((cel * (9 / 5)) + 32);
    const fahTocel = (fah) => Math.round((fah - 32) * (5 / 9));
    // let result = celToFah(NumberTemp);
    //     document.querySelector('#resultcontainer').innerHTML = `${result}°fahrenheit`;
    
    // let result = FahTocel(NumberTemp);
    //    document.querySelector('#resultcontainer').innerHTML = `${result}°Celsius`;
    if (valueTemp == 'cel') {
        result = celToFah(NumberTemp);
        document.querySelector('#resultcontainer').innerHTML = `${result}°Fahrenheit`;
    } else {
        result = fahTocel(NumberTemp);
        document.querySelector('#resultcontainer').innerHTML = `${result}°Celsius`;
    }
} 