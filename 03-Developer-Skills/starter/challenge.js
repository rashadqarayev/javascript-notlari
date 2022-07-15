'Meselen bir array yarat [17,21,23] ve loga 17 in 1 days, 21 in 2 days  '
'printForecast arr parameter'
'Data 1 17,21,23  12,5,-5,0.4'

const data1=[17,21,23]


const printForecast =(arr)=>{
    let str = '';
    for(let i = 0 ; i < arr.length;i++){
        str = str + `${arr[i]}C in ${i+1} days...`
    }
    console.log('...' + str);
}

printForecast(data1)