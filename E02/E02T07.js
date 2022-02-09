function convertOuncesToGrams (a, b, c) {
    
    console.log(a, b, c);
    
} 

var measurements = [{ batchid: 434, unit: 'ounce', weight: 12.21 }, 
        {batchid: 414, unit: 'gram', weight: 199.54 },
        { batchid: 522, unit: 'ounce', weight: 18.88 }]

convertOuncesToGrams(...measurements);
