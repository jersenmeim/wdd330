
		const MOUNTAINS = [
			{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
			{name: "Everest", height: 8848, place: "Nepal"},
			{name: "Mount Fuji", height: 3776, place: "Japan"},
			{name: "Vaalserberg", height: 323, place: "Netherlands"},
			{name: "Denali", height: 6168, place: "United States"},
			{name: "Popocatepetl", height: 5465, place: "Mexico"},
			{name: "Mont Blanc", height: 4808, place: "Italy/France"}
		];
		
		function generateTable(){
			
			//function to create elements
			function createElement(tag, text, id){
				const container = document.createElement(tag);
				container.textContent = text;
				container.setAttribute("id", id);
				return container;
			}
			
			
			//create table
			document.getElementById("mountains").appendChild(createElement("table","", "mountain-table"));
			
			
			//create header
			document.getElementById("mountain-table").appendChild(createElement("tr", "", "table-header"))
			
			
			//Header data push
			let keyNames = Object.keys(MOUNTAINS[0])
				
			for (let i=0; i<keyNames.length;i++ ){
				document.getElementById("table-header").appendChild(createElement("th", keyNames[i].toUpperCase()));
			}
			
			//create data for table
			let row = MOUNTAINS.length;
			
			for (j=0; j<row; j++){
				let mtIndex = Object.values(MOUNTAINS[j]);
				document.getElementById("mountain-table").appendChild(createElement("tr", "", "row"+j))
				
				for (i=0; i<keyNames.length;i++ ){
				document.getElementById("row"+j).appendChild(createElement("td", mtIndex[i]));
				}
			}
            //remove the button when pressed
			document.getElementById("button").style.display = "none";
		}
	