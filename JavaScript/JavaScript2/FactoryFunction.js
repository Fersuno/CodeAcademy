const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true)
  
  tinCan.beep()

  //Se puede hacer un property value shorthand haciendo mas facil el trabajo.

  function robotFactory(model, mobile){
    return {
      model, //no hay que colocar el valor doble
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  //destructure assigment

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot; //se crea la variable entre corchetes con el valor al objeto que quieres entrar
  
  functionality.beep()
