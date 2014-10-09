/**
 * Created by Toshiba on 26/09/14.
 */

//Ext.regModel('modelo', {
Ext.define('modelo', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'ldcnomc'},
        {name: 'ldcnomfilc'},
        {name: 'ldcstac'},
        {name: 'ldctamc'},
        {name: 'sysldcfecd'}
    ]
});

var Nstore = new Ext.data.Store({
    model:'modelo',
    fields: [
        {name: 'Nombre'},
        {name: 'Nombre Archivo'},
        {name: 'status Carga'},
        {name: 'Tamaño Archivo'},
        {name: 'Fecha Carga'}
    ],
    data: [
        ['Ext JS 4: First Look','Loiane Groner'],
        ['Ext JS 4: First Look','Loiane Groner'],
        ['Ext JS 4: First Look','Loiane Groner'],
        ['Ext JS 4: First Look','Loiane Groner'],
        ['Ext JS 4: First Look','Loiane Groner']    
    ]
});

//var pluginExpanded = true;
var Ngrid = Ext.create('Ext.grid.Panel', {
   store: Nstore,
   columns: [ 
        {text : 'id',  width:50, sortable : false},
        {text : 'Nombre', flex : 1, sortable : true , dataIndex: 'ldcnomc'},
        {text : 'Nombre Archivo', flex : 1, sortable : true , dataIndex: 'ldcnomfilc'},
        {text : 'Status Carga', flex : 1, sortable : true , dataIndex: 'ldcstac'},
        {text : 'Tamaño Carga', flex : 1, sortable : true , dataIndex: 'ldctamc'},
        {text : 'Fecha Carga', flex : 1, sortable : true , dataIndex: 'sysldcfecd'}
    ],        
    title: 'Archivos Cargados'
});

// Inicio Formulario Cargar archivos
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'CargarArchivos',
    bodyPadding: 10,
    title: 'Cargar archivos',
    closable: true,
    layout: 'anchor',
    items: [
        {
            xtype: 'fieldset',
            title: 'Maestro de productos',
            height: 100,
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    name: 'nArchivo',
                    fieldLabel: 'Nombre'
                },
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    name:'maestro',
                    fieldLabel: 'Archivo origen',
                    buttonText: 'Abrir...',
                    listeners: {
                        change: function(fld, value) {
                            var newValue = value.replace(/C:\\fakepath\\/g, '');
                            fld.setRawValue(newValue);
                        }
                    }
                }
            ]
        },Ngrid        
    ],    
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Cargar',
                    handler: function(){
                        var form = this.up('form').getForm();                                
                        if(form.isValid()){
                            form.submit({
                                url: 'svr/src/cargarMaestros.php',
                                waitMsg: 'Cargando el archivo...',                                                            
                                success: function(result,request) {                        
                                    //var obj = Ext.decode(request.responseText); 
                                    Ext.Msg.alert('Mensaje de MATRIX','La carga finalizo correctamente');
                                },
                                failure: function(result,request){
                                    //var obj = Ext.decode(result.responseText);
                                }
                            });

                        };
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cerrar'
                }
            ]
        }
    ]
});
// Fin Formulario Cargar archivos
