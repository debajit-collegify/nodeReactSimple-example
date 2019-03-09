const express = require('express');

const app = express();

app.get('/api/customers' , (req,res) => { 
    const customers = [
        {id: 1 , firstName: "Saptarshi" , lastname: "Biswas"},
        {id: 2 , firstName: "Suman" , lastname: "Bhowmik"},
        {id: 3 , firstName: "Amit" , lastname: "Mondol"}
    ];
    res.json(customers);

});


const port = 5000;

app.listen(port , () => console.log(`server started on port ${port}`));

