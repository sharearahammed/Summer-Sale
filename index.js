// let titleCount = 1;
// let totalPrice = 0;

// const cards = document.querySelectorAll('.card');
// // console.log(cards);

// for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     console.log(card);
//     card.addEventListener('click', function () {
//         console.log("clicked");

//         // get the title
//         const title = card.querySelector('h3').innerText;

//         const price = card.querySelector('span').innerText.split(' ')[1];
//         const value = parseFloat(price);
//         console.log(value);


//         const titleContainer = document.getElementById('title-container');

//         const p = document.createElement('p');
//         p.innerText = titleCount + ". " + title;
//         titleContainer.appendChild(p);
//         titleCount++;

//         // calculate price
//         totalPrice += value;
//         console.log(totalPrice);
//         document.getElementById('totalPrice').innerText = totalPrice;
//     })
// }

// const btn = document.getElementById('apply-btn');
// btn.addEventListener('click', function () {
//     // console.log("clicked");

//     // get the value from input

//     const coupponElement = document.getElementById('input-field').value;
//     const cuponCode = coupponElement.split(' ').join("").toUpperCase();
//     console.log(cuponCode);
//     if (totalPrice >= 200) {
//         if (cuponCode === "SELL200") {

//             // discount calculation
//             const discountElement = document.getElementById('discountPrice');
//             const discountAmount = totalPrice * 0.2;
//             discountElement.innerText = discountAmount.toFixed(2);

//             // rest calculation
//             const restTotal = document.getElementById('total');
//             restTotal.innerText = totalPrice - discountAmount.toFixed(2);
//             document.getElementById('input-field').value = "";
//         }
//         else {
//             alert("Invalid CouponCode");
//         }
//     }
//     else {
//         alert("please at least $200 khoroch koren Vai!")
//     }
// })

let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll('.card');
// console.log(cards);

for(let i = 0; i < cards.length; i++){
    const card = cards[i];
    // console.log(card);

    card.addEventListener('click',function(){
        console.log('clicked');

        const title = card.querySelector('h3').innerText;
        // console.log(title);
        const price = card.querySelector('span').innerText.split(' ')[1];
        const value = parseFloat(price);
        // console.log(value);

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount+". "+ title;
        titleContainer.appendChild(p);
        titleCount++;
        
        
        // calculate price
        totalPrice += value;
        // console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice;
        
    })
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click',function(){
    
    const inputField = document.getElementById('input-field').value;
    const cuponCode = inputField.split(' ').join('').toUpperCase();

    if(totalPrice >= 200){
        // console.log('ok');
        if(cuponCode === 'SELL200'){
            // discount
            const discountElement = document.getElementById('discountPrice');
            const discount = totalPrice * 0.2;
            discountElement.innerText = discount.toFixed(2);

            // total
            const totalElement = document.getElementById('total');
            const total = totalPrice - discount;
            totalElement.innerText = total;

        }
        else{
            alert("Invalid CouponCode");
        }
    }
    else{
        alert('Please vai 200 khoroch koren!');
    }
})