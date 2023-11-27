const ProductValidation = {
    cartProductName: {
       rules: [
         {
           test: /^[a-zA-Z ]*$/,
           message: 'Cart Name must contain only alphabets characters',
         },
         {
           test: (value) => {
             return value.length > 3;
           },
           message: 'Cart Product Name must be longer than three characters',
         },
       ],
       errors: [],
       valid: false,
       state: '',
     },
   
     quantity: {
         rules: [
           {
               test: /^[0-9]*$/,
               message: 'Cart quantity must contain only numeric digit',
             },
             {
                 test: (value) => {
                   return value.length < 5;
                 },
                 message: 'Cart quantity must should be less than 5',
               },
 
         ],
         errors: [],
         valid: false,
         state: ''
       },
       price: {
         rules: [
           {
               test: /^[0-9]*$/,
               message: 'Cart price must contain only numeric digit',
             },
             {
                 test: (value) => {
                   return value.length > 0;
                 },
                 message: 'Cart price must be more than 0',
               },
 
         ],
         errors: [],
         valid: false,
         state: ''
       },
   
       cartid : {
         rules: [
           {
               test: /^[0-9]*$/,
               message: 'Cart Id must contain only numeric digit',
             },
         ],
         errors: [],
         valid: false,
         state: ''
       },
   };
   
   export default ProductValidation;