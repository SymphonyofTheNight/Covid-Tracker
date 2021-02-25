const api = 'https://corona.lmao.ninja/v2/countries/';

fetch(api,{
    headers : { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})
    .then(res => res.json())
    .then(data => {

        for(var i = 0; i < data.length; i++){
            
            const selectList = document.querySelector('.form-select');
            const newElement = document.createElement('option');

            newElement.innerText = data[i].country;
            
            selectList.append(newElement);

        }

        const selected = document.querySelector('.form-select');

        selected.addEventListener('change', ()=> {

            const selectedText = selected.options[selected.selectedIndex].innerText;

            for(var i = 0; i < data.length; i++){

                if(selectedText == data[i].country){
                    
                    const totalcase = document.querySelector('.total-case');
                    const activecase = document.querySelector('.active-case');
                    const deaths = document.querySelector('.deaths');
                    const population  = document.querySelector('.population');
                    const recovered = document.querySelector('.recovered');
                    const critical = document.querySelector('.critical');

                    totalcase.innerHTML = data[i].cases;
                    activecase.innerHTML = data[i].active;
                    deaths.innerHTML = data[i].deaths;
                    population.innerHTML = data[i].population;
                    recovered.innerHTML = data[i].recovered;
                    critical.innerHTML = data[i].critical;

                }

            }


        })





    }
);

