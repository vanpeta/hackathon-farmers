function formSubmission() {
  var year = document.getElementById("year").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  console.log(year, make, model);
  
    if(year==="2020" && model ==="3" && make==="tesla"){
    document.getElementById("initial-quote").innerHTML = "2000 a month is your payment";

  } else if(year=== "2020" && model==="corvette" && make ==="chevrolet"){
    document.getElementById("initial-quote").innerHTML = "1000 a month is your payment";

  } else if(year==="2019"&& model==="highlander"&& make ==="toyota"){
    document.getElementById("initial-quote").innerHTML = "1000 a month is your payment";

  } else if (year===""|| model===""||make==="" ) { 
    document.getElementById("initial-quote").innerHTML = "Please fill out everything";

  } else {
    document.getElementById("initial-quote").innerHTML = "Please fill the data correctly";

  }
  
};




var quoteResponses = [
  {
    type: 'electric',
    price: '$500 / 6 months',
    effectiveDate: 'January 1, 2020',
    expirationDaye: 'July 1 2020',
    coverages: ['Collision', 'Personal Injury', 'Uninsured Motorist', 'Comprenhensive', 'Rental', 'Road Assistance'],
    comparassion: [
      {
        car: '2019 Tesla Model X',
        price: '$600'
      },
      {
        car: '2019 Tesla Model S',
        price: '$700'
      },
      {
        car: '2019 Chevy Bolt',
        price: '$350'
      },
      {
        car: '2019 Nisan Leaf',
        price: '$350'
      }
    ]

},
  {
    type: 'muscle',
    price: '$600 / 6 months',
    effectiveDate: 'February 2, 2020',
    expirationDaye: 'August 2 2020',
    coverages: ['Comprenhensive', 'Rental', 'Collision', 'Personal Injury'],
    comparassion: [
      {
        car: '2018 Ford Mustang',
        price: '$600'
      },
      {
        car: '2018 Chevrolet Camaro',
        price: '$700'
      },
      {
        car: '2018 Dodge Challenger',
        price: '$600'
      },
      {
        car: '2018 Lunar Rover',
        price: '$750'
      }
    ]

},
  {
    type: 'pickup',
    price: '$440 / 6 months',
    effectiveDate: 'March 3, 2020',
    expirationDaye: 'September 3 2020',
    coverages: ['Collision', 'Personal Injury', 'Uninsured Motorist', 'Comprenhensive', 'Rental', 'Road Assistance'],
    comparassion: [
      {
        car: '2018 Toyota Takoma',
        price: '$700'
      },
      {
        car: '2018 Ford F150',
        price: '$800'
      },
      {
        car: '2018 Ford Rapter',
        price: '$850'
      },
      {
        car: '2018 Toyota Tundra',
        price: '$'
      }
    ]

},
  {
    type: 'SUV',
    price: '$750 / 6 months',
    effectiveDate: 'April 4, 2020',
    expirationDaye: 'October 4 2020',
    coverages: ['Collision', 'Personal Injury', 'Uninsured Motorist', 'Road Assistance'],
    comparassion: [
      {
        car: '2019 Toyota RAV4',
        price: '$1000'
      },
      {
        car: '2019 Ranger Rover Sport',
        price: '$900'
      },
      {
        car: '2019 Acura MDX',
        price: '$800'
      },
      {
        car: '2019 Ford Scape',
        price: '$750'
      }
    ]
  }
];
