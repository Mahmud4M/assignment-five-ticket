const seatAll = document.getElementsByClassName('seat-num');
for (const seat of seatAll) {
    let count = 0;
    let selectSeat = 8;
    seat.addEventListener('click', function (e) {
        count = count + 1;
        selectSeat = selectSeat - 1;
        setInnerText('seat-selected', count);
        setInnerText('seat-left', selectSeat);
        // if (count >= 4) {
        //     count = 0;
        // }
        //Ticket Datils
        const ticketDatils = document.getElementById('selected-seat-name');

        const ul = document.createElement('ul');

        // const seatName = e.target.parentNode.childNodes[1].innerText;
        const seatName = seat.innerText;
        const price = document.getElementById('price').innerText;

        const li = document.createElement('li');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');

        li.innerText = price;
        li1.innerText = seatName;
        li2.innerText = 'economics';

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li);
        ticketDatils.appendChild(ul);

        // Total Cost
        totalCost('total-cost', parseInt(price));
        //Grand Total
        grandTotalCost('grand-total', parseInt(price))



    })
}



// Total Cost
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalcost = parseInt(totalCost);
    const sum = convertedTotalcost + value;
    setInnerText(id, sum);
}

// }
//Grand Total
function grandTotalCost(category) {
    const grandTotal = document.getElementById('total-cost').innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    // Discount Work
    const inputText = document.getElementById('input-text').value;
    const code = category = inputText;
    const couponOne = 'new10';
    const couponTwo = 'Couple 20';
    const priceCouponOne = convertedGrandTotal - convertedGrandTotal * 0.15;
    const priceCouponTwo = convertedGrandTotal - convertedGrandTotal * 0.20;
    if(code === couponOne){
        setInnerText('grand-total', priceCouponOne);
    }
    else if(code === couponTwo){
        setInnerText('grand-total', priceCouponTwo);
    }
    else{
        setInnerText('grand-total', convertedGrandTotal);
    }
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    document.getElementById(id).innerText = value;
}