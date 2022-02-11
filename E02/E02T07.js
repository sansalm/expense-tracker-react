

function convertOuncesToGrams (a, b, c) {
    
    a.unit = 'gram'
    a.weight = (parseFloat(((a.weight * 28.35)*100)/100)).toFixed(2);
    
    c.unit = 'gram'
    c.weight = (parseFloat(((c.weight * 28.35)*100)/100)).toFixed(2);

    console.log(a)
    console.log(b)
    console.log(c)
} 

var measurements = [{ batchid: 434, unit: 'ounce', weight: 12.21 }, 
        {batchid: 414, unit: 'gram', weight: 199.54 },
        { batchid: 522, unit: 'ounce', weight: 18.88 }]

convertOuncesToGrams(...measurements);
