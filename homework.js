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
    

    //     function kate (...args){
    //     let numberssum = 0;
    //     for(let item of args){   
    //         numberssum = numberssum +item;
    //         console.log(numberssum);
    // `` }
    //     return numberssum;
    //  }
    //     let result =  kate(10, 50, 6, 7, 8, 11, 6, 3, 9);
    //      console.log(result);



        //  function kate (...args) {
        //      let numberssum = 0;
        //      for(let item of args){
        //          numberssum = numberssum + item;
        //      }
        //      console.log(numberssum);
        //  }
        //  kate(10, 50, 6, 7, 8, 11, 6, 3, 9);


    
        //  ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
        //  თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

        //  let user = {
        //     firstname: 'giorgi',
        //     lastname: 'saakadze',
        //     age: 32,
        //     isloggedin: true
        //   }
          
         
        //   function test(names) {
        //       if (names.isloggedin) {
        //           return names.firstname + " " + names.lastname;
        //       }
        //       return false;
        //   }

        //     let result = test(user);
        //     console.log(result);





        // 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
        // ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:



        function getMaxValue(numbers) {
            let maxValue = 0;
      
            for (let i = 0; i < numbers.length; i++) {
                let y = numbers[i];
      
                if (y > maxValue) {
                    maxValue = y
                } 
                
            }
            return maxValue;
        }
        
        console.log(getMaxValue([3, 102, 25, 110, 36]));






