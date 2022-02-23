// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


// let array = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
    
//     array.forEach(item => {
//         if (item<0) {
//             console.log(item);
//         }
        

//     })


    // ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
    // 10, 50, 6, 7, 8, 11, 6, 3, 9
    

    function first (...number){
        let numberssum = 0;
        for(let item of number){   
            numberssum = numberssum +item;
        }
            return numberssum;
        }

        first(10, 50, 6, 7, 8, 11, 6, 3, 9);
        // let result= list(10, 50, 6, 7, 8, 11, 6, 3, 9);
        // console.log(result);




