const PORT = 3000
const express = require('express');
const axios = require('axios');
const { json } = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    // res.send('Hello World');

    try {
        
const response = fetch('https://tarmeezacademy.com/api/v1/posts')
.then((response) => response.json())
.then((data) => res.send(data.data[0]))

    //    return res.send(data.data)
    } catch (error) {
        res.json({ message: error.error})
    }

})





// async function getPosts(){
//     const response = await axios('https://tarmeezacademy.com/api/v1/posts', () => {
//             const data = response.data;

//             console.log(data);
//     })
    
// }
// getPosts();



app.listen(PORT, () => console.log(`Connected to port: http://localhost:${PORT}`))




