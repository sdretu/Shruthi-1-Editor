
var fileName="./test.syx";

var bytes = new Array();

if (jsarguments.length>1)
	myval = jsarguments[1];
	
function saveAs(v)
{
	fileName = "" + v;
	post("Save bin file as " + fileName + "\n");
	writeBinFile();
}

function writeBinFile()
{
	var file = new File(fileName, "write");
	file.writebytes(bytes);
	file.close();
	bytes = new Array();
}

function clear()
{
	bytes = new Array();
	post("cleared contents, bytes length: " + bytes.length + "\n");
}

function bang()
{
	outlet(0,"myvalue","is",myval);
}

function msg_int(v)
{
	post("received int " + v + "\n");
	bytes.push(v);
}

function msg_float(v)
{
	post("received float " + v + "\n");
}

function list()
{
	var a = arrayfromargs(arguments);
	post("received list " + a + "\n");
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	bang();
}
