function mostracodigo() {
  var frequency = $("input[name='freq']:checked").val();
  var interest = $("input[name='goal']:checked").val();
  var biotype = $("input[name='shape']:checked").val();
  var codeAssessment = frequency + interest + biotype + '.pdf';
  alert('Os campos selecionados foram: ' + frequency + interest + biotype);
  alert('O valor da variavel codigo foi: ' + codeAssessment);
}
