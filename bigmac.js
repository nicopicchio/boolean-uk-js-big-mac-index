// Big Mac prices
let bigMacUS = 5.65;
let bigMacGB = 4.75;
let bigMacCH = 7.04;
let bigMacJAP = 3.55;
let bigMacEUR = 5.02;

// Currency exchange rates
let USDUSDIndex = 1.00;
let GBPUSDIndex = 1.37;
let CHFUSDIndex = 1.08;
let JPYUSDIndex = 0.0088;
let EURUSDIndex = 1.16;

// Country IPP
const USipp = (bigMacUS / bigMacUS);
const GBipp = (bigMacUS / bigMacGB);
const CHipp = (bigMacUS / bigMacCH);
const JAPipp = (bigMacUS / bigMacJAP);
const EURipp = (bigMacUS / bigMacEUR);

// Big Mac Index
const BMIndexUS = ((USDUSDIndex - USipp) / USipp);
const BMIndexGB = ((GBPUSDIndex - GBipp) / GBipp);
const BMIndexCH = ((CHFUSDIndex - CHipp) / CHipp);
const BMIndexJAP = ((JPYUSDIndex - JAPipp) / JAPipp);
const BMIndexEUR = ((EURUSDIndex - EURipp) / EURipp);

//Big Mac Index expressed in percentage
const BMIndexUSpercent = (BMIndexUS * 100);
const BMIndexGBpercent = (BMIndexGB * 100);
const BMIndexCHpercent = (BMIndexCH * 100);
const BMIndexJAPpercent = (BMIndexJAP * 100);
const BMIndexEURpercent = (BMIndexEUR * 100);

//Big Mac Index comparison between countries
const BMIndexComparisonUS = (BMIndexUSpercent > BMIndexUSpercent);
const BMIndexComparisonGB = (BMIndexGBpercent > BMIndexUSpercent);
const BMIndexComparisonCH = (BMIndexCHpercent > BMIndexUSpercent);
const BMIndexComparisonJAP = (BMIndexJAPpercent > BMIndexUSpercent);
const BMIndexComparisonEUR = (BMIndexEURpercent > BMIndexUSpercent);

//Logged variables results
console.log(BMIndexUSpercent);
console.log(BMIndexGBpercent);
console.log(BMIndexCHpercent);
console.log(BMIndexJAPpercent);
console.log(BMIndexEURpercent);

console.log(BMIndexComparisonUS);
console.log(BMIndexComparisonGB);
console.log(BMIndexComparisonCH);
console.log(BMIndexComparisonJAP);
console.log(BMIndexComparisonEUR);