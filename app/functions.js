
// Funcion para imprimir datos JSON, se usa para debuggear
function vardump(obj){
	var out = '';
	for (property in obj) {
		out = out + property +': '+ obj[property] + "\n";
	}
	return out;
}

// Funcion para agregar un nueevo tab en el entorno principal
function addNewTab(nPadre, nHijo, nTitulo){
    var tp = Ext.getCmp(nPadre);
    var th = Ext.ComponentQuery.query('panel[itemId=' + nHijo + ']')[0];

    if (tp.child("#"+nHijo)) {
    	th.show();
    	th.tab.show();
    }
    else {
        $.ajax({
            type: "GET",
            async: false,
            url: "app/view/" + nHijo + ".js",
            dataType: "script"
        });
        th = Ext.ComponentQuery.query('panel[itemId=' + nHijo + ']')[0];
		tp.add(th).show();
    }
    tp.setActiveTab(th);
	tp.doLayout();
}

// Funcion para evaluar si un dato es nulo
function isnull(dato){
    return (dato=='undefined' || dato == null) ? true : false;
}

// Funcion para evaluar si un dato no tiene valor
function isempty(dato) {
    return (isnull(dato) || (dato == '')) ? true : false;
}

// Funcion para pintar la celda entidad en la grilla
function fnRenderEntidad(val) {
	if(val == 'despacho'){
		return '<span style="color:red;">' + val + '</span>';
	}
	return val;	
}

