
/*---exc1---*/

/*for(var i=120; i<=140;i++)
{
	document.write(i,"<br>");
}*/






/*---exc2---*/

/*for(var j=1;j<6;j++)
{
	for(var z=0;z<j;z++)
	{
		document.write("*");
	}
	document.write("<br>");
}*/




/*---exc3---*/

/*var person1={name:"ayman",height:170};
var person2={name:"ghoroub",height:165};
var person3={name:"rafat",height:185};
var obj=[person1,person2,person3];
for(var x=0;x<obj.length;x++)
{
	for(var v in obj[x])
	{
	if(v==="height")
	{
		document.write(obj[x].name,">",v,": ",obj[x].height,"<br>");
	}
	}
}*/



/*---exc4---*/

/*var person1={name:"ayman",height:170};
var person2={name:"ghoroub",height:165};
var person3={name:"rafat",height:185};
var obj=[person1,person2,person3];
for(var x=0;x<obj.length;x++)
{
	for(var v in obj[x])
	{
	if(v==="height")
	{
		obj[x].height=175;
	}
	}
	
	document.write(obj[x].name,": ",obj[x].height,"<br>");
}
*/