function scuberGreetingForFeet(distance){
  // Write your code here!
  if ( distance <= 400){
    const result = 'This one is on me!';
    return result
    }
  
   if ( distance > 400 && distance<= 2000){
    
     const result = 'That will be twenty bucks.';
    return result
    }
  
   if ( distance > 2000 && distance <= 2500){
    const result = 'I will gladly take your thirty bucks.';
    return result
     
    }
  
   if ( distance > 2500){
     const result = 'No can do.';
    return result
    }
  
  }

  scuberGreetingForFeet()

function ternaryCheckCity(city){
  if (city === 'NYC') {
    const shouldiStayOrShouldIGo = 'Ok, sounds good.';
    return shouldiStayOrShouldIGo
  }
  else {
    const shouldiStayOrShouldIGo = 'No go.';
    return shouldiStayOrShouldIGo
    
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
if ( tip === 'generous') {
  
  console.log('Thank you so much.');
  return 'Thank you so much.'
  
}

if (tip === 'not as generous') {
  
  console.log('Thank you.');
  return 'Thank you.'
  
}

else {  
  console.log('Bye.');
  return 'Bye.'
  
}

}
switchOnCharmFromTip()