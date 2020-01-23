function calcu()
{
    var resul = document.form.textview.value 
    if(resul)
    {
        document.form.textview.value = eval(resul)
    }
}
function inserir(num)
{
    document.form.textview.value = document.form.textview.value+num
}
function limpar()
{
    document.form.textview.value = ""
}