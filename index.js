// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const lowCaseName=drivers.map(function(d){
  return d.toLowerCase();
});
  return lowCaseName;
}
function nameToAttributes(drivers)
{
    const nameAttrib=drivers.map(function(nm)
    {
      const arrNam=nm.split(" ");
      return {'firstName':arrNam[0],'lastName':arrNam[1]};
    });
    return nameAttrib;
}
function attributesToPhrase(drivers){
    const arrText=drivers.map(function(nm){
      return {nm.name+' is from '+nm.hometown};
    });
    return arrText;
}
