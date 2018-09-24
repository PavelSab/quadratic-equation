module.exports = function solveEquation(equation) {
  equation=equation.replace(/\s/g, '');
  var array=[];
  var indexA=equation.search(/\^/);
  var a=parseInt(equation.slice(0,indexA));
  var indexB=equation.search(/\*x[+-]/);
  var b=parseInt(equation.slice(indexA+2,indexB));
  var c=parseInt(equation.slice(indexB+2));

  var discremenant=(b*b)-(4*a*c);
      var x1=Math.round((-b+Math.sqrt(discremenant))/(2*a));
      var x2=Math.round((-b-Math.sqrt(discremenant))/(2*a));

      array.push(x1,x2);
      return array.sort(function (a,b) {
          return a-b;
      });

}