function mostracodigo() {
  var frequency = $("input[name='freq']:checked").val();
  var interest = $("input[name='goal']:checked").val();
  var biotype = $("input[name='shape']:checked").val();
  var codeAssessment =
    './assessments/' + frequency + interest + biotype + '.pdf';
 alert('The variable name: ' + codeAssessment);
  window.open(codeAssessment);
}
