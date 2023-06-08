class Cl_vehiculo{
  constructor(placa, tVehiculo, tarifa)
  {
     this.placa = placa
     this.tVehiculo = tVehiculo
     this.tarifa = tarifa
  }
  tarVehiculo ()
  {
     return this.tarifa
  }
 }
  
 class Cl_peaje
 {
  constructor()
  {
     this.contVehiculo = 0;
     this.contP = 0;
     this.contT = 0;
     this.contC = 0;
     this.acumTarifa = 0;
  }
 ProcesarVehiculo(v)
 {
     this.contVehiculo++;
     this.acumTarifa += v.tarifa;
     if(v.tVehiculo === 1)
     {
         this.contP++;
     }if(v.tVehiculo === 2){
         this.contT++;
     }if(v.tVehiculo === 3){
         this.contC++;
     }
 }
 porcP()
 {
     return this.contP / this.contVehiculo * 100;
 }
 porcT()
 {
     return this.contT / this.contVehiculo * 100;
 }
 porcC()
 {
     return this.contC / this.contVehiculo * 100;
 }
 porcMunicipio()
 {
     return this.acumTarifa * 0.40;
 }
 } 
 
 let v1 = new Cl_vehiculo("A1",1,10)
 let v2 = new Cl_vehiculo("A2",2,20)
 let v3 = new Cl_vehiculo("A3",3,50)
 let v4 = new Cl_vehiculo("A4",3,50)
 let v5 = new Cl_vehiculo("A5",3,50)
 
 let  peaje = new Cl_peaje;
 peaje.ProcesarVehiculo(v1);
 peaje.ProcesarVehiculo(v2);
 peaje.ProcesarVehiculo(v3);
 peaje.ProcesarVehiculo(v4);
 peaje.ProcesarVehiculo(v5);
 
 let salida = document.getElementById("salida");
 salida.innerHTML = "RESULTADOS";
 salida.innerHTML += `<br>El monto del vehículo con la placa: ${v1.placa} es: ${v1.tarVehiculo()}$`;
 salida.innerHTML += `<br>El monto del vehículo con la placa: ${v2.placa} es: ${v2.tarVehiculo()}$`;
 salida.innerHTML += `<br>El monto del vehículo con la placa: ${v3.placa} es: ${v3.tarVehiculo()}$`;
 salida.innerHTML += `<br>El monto del vehículo  con la placa: ${v4.placa} es: ${v4.tarVehiculo()}$`;
 salida.innerHTML += `<br>El monto del vehículo con la placa: ${v5.placa} es: ${v5.tarVehiculo()}$`;
 salida.innerHTML += "<br>El porcentaje de vehículos de tipo personal es:"  + peaje.porcP()+"%";
 salida.innerHTML += "<br>El porcentaje de vehículos de tipo transporte es:"  + peaje.porcT()+"%";
 salida.innerHTML += "<br>El porcentaje de vehículos de tipo carga es:"  + peaje.porcC()+"%";
 salida.innerHTML += "<br>El monto total a pagar al municipio es:" + peaje.porcMunicipio() + "$ correspondiente al 40% de todo lo cobrado";