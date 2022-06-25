
 let btn = document.getElementById('btn-request2');
function GetUniversities() {
    fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
        .then(res => res.json())
        .then(data => {
            let div = '';

            let value = document.getElementById('input').value;
      
            let filteredCoins = data.filter(x => x.toLowerCase().includes(value.toLowerCase()))
            let input = document.getElementById('input');
            input.onkeyup = function(e) {
                let input_value;
                input_value = e.target.value;
                console.log(input_value);
            }
           let count=10;
           function Load(){
            count+=10
           }
data.slice(0,count).forEach(coin=>{

                div += `
            <tr>
            <td>${coin.domains}</td>
            <td>${coin.web_pages} </td>
            <td>${coin.name}</td >
            <td>${coin.country}</td>
            <td>${coin.alpha_two_code}</td>
         
            <td></td>
          </tr>
            `
            })
            document.getElementById('tbody').innerHTML = div
        })
        .catch(err => console.log(err));
    }
 GetUniversities();
