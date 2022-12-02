
// Array jo hota hai wo javascript me object hota hai
const languages = ['hindi','english'];
// debugger;
console.log(languages);

// Pop akhiri item nikalta hai last item
// console.log(languages.pop());

// Shift nikalta hai first item.
console.log('isme yeh hataya hai',languages.shift('english'));

// // Unshift Add krta hai first pe.
// console.log(languages.unshift('French'),'Yeh hai',languages);

// // Push add krta hai akhiri me 
// console.log(languages.push('Malyalam'));
console.log('isme yeh bacha hai',languages);

const publist = [
      {
        name:'kartik',
        payment: '150'
      }
      ,
       {
        name:'sahil',
        payment: '140'
      } 
      ,{
        name:'ramesh',
        payment: '180'
      }
];

for(i=0;i<publist.length;i++) {
    publist[i].payment = publist[i].payment - 10;
    // console.log(publist[i]);
}

// Foreach  is a callback function and easy than for loop
// Here we pass any name to array in foreach then 
//access in block for operations
// Here foreach iterates one by one
publist.forEach((v,i)=> {
    
    v.payment = v.payment-10;
    // console.log(v,i);
})

for (let v of publist) {
    v.payment = v.payment - 10;
    console.log(v,i);
}

// Filter gives new array and return true and false

const check = publist.filter((v)=> {
    // debugger;
    if(v.payment>130) {
        return true;
    }
    else {
        return false;
    }
    // return false;
})

console.log(check);

const maparr = [
    {
      first: 'kartik',
      last: 'Verma'
    },
    {
        first: 'Sarthak',
        last: 'Gola'
    },
    {
        first: 'kshitiz',
        last: 'kotwal'
    }
    
]

const maparrnew = maparr.map((mapobj)=>{
        return {
            'Newname':mapobj.first +' '+ mapobj.last,
            'firstname': mapobj.first,
            'lastname': mapobj.last,
            'status': 1
        };
});
console.log(maparrnew);

const product = [
    {
        pname: 'product_1',
        pprice: '150',
    },
    {
        pname: 'product_2',
        pprice: '180',
    },
    {
        pname: 'product_3',
        pprice: '200',
    }
];
 let total=0;
product.forEach((p)=>{
    // debugger;
    // try{
        total = +total + +p.pprice;
    // }
    // catch(e) {
    //      console.log('yeh', e);
    // }
})
console.log(total);
/* I m on dev branch  */

 





