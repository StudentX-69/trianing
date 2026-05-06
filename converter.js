const calculateTemp = () => {
    const NumberTemp = document.getElementById('temp').value;
    // 
    // const tempslected = document.getElementById('temp_diff').value;
    const valueTemp = temp_diff.options[tempslected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * (9 / 5)) + 32);
        return fahrenheit;
    }
    const FahTocel = (fah) => {
        let celcius = Math.round((fah - 32) * (5 / 9));
        return celcius;
    }
    // let result = celToFah(NumberTemp);
    //     document.querySelector('#resultcontainer').innerHTML = `${result}°fahrenheit`;
    
    if (valueTemp == 'cel') {
        result = celToFah(NumberTemp);
        document.querySelector('#resultcontainer').innerHTML = `${result}°celsius`;
    } else {
        result = fahTocel(NumberTemp);
        document.querySelector('#resultcontainer').innerHTML = `${result}°fahrenheit`;
    }

} 