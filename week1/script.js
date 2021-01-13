function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}


function run()
{
    val = document.getElementById("value").value;
    document.getElementById("results").innerHTML= reverse_a_number(val);
}