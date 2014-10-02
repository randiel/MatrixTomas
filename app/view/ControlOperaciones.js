//Ext.define("MyModel", {extend: "Ext.data.Model", fields: []});

var fco_MdlOpe = Ext.regModel('fco_MdlOpe', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'opekeyi'},    
        {name: 'ctrseci'},
        {name: 'openamc'},
        {name: 'opefepd'},
        {name: 'opehric'},
        {name: 'opehrfc'},
        {name: 'opettrc'},
        {name: 'opeestc'}
    ]
});

var pars = new Object();
pars.p_prjkeyi = 20;
var fco_StrOpe = null;
fco_StrOpe = new Ext.data.Store({
    storeId: 'fco_StrOpe',
    model: fco_MdlOpe,
    autoLoad: true,
    pageSize: 100,
    proxy: {
        type: 'ajax',
        startParam:false,
        limitParam:false,
        noCache:false,
        pageParam:false,        
        url : 'svr/src/ejecutarProcedimiento.php',
        extraParams: {
            'procedimiento': 'consultarOperacionesProyecto',
            'parametros': Ext.encode(pars)
        }, 
        reader: {
            type: 'json', 
            root: 'results',
            totalProperty: 'rows'
        }
    }
});

var smOpeSel = new Ext.selection.CheckboxModel({
    checkOnly: true,
    mode: 'SINGLE'
});

// Inicio Formulario Control de operaciones
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'ControlOperaciones',
    bodyPadding: 10,
    title: 'Control de operaciones',
    closable: true,
    items: [
        {
            xtype: 'gridpanel',
            title: 'Operaciones del proyecto',
            selModel: smOpeSel,
            store: fco_StrOpe,
            viewConfig: {
                forceFit: true,
                emptyText: 'No se encontraron registros.',
                stripeRows: false
            },            
            columns: [
                {xtype: 'gridcolumn', dataIndex: 'opekeyi', text: 'Key', hidden: true},
                {xtype: 'gridcolumn', dataIndex: 'ctrseci', text: 'Orden'}, 
                {xtype: 'gridcolumn', dataIndex: 'openamc', text: 'Actividad', flex: 1 }, 
                {xtype: 'gridcolumn', dataIndex: 'opefepd', text: 'Fecha de ejecucion'}, 
                {xtype: 'gridcolumn', dataIndex: 'opehric', text: 'Hora inicio'}, 
                {xtype: 'gridcolumn', dataIndex: 'opehrfc', text: 'Hora Fin'}, 
                {xtype: 'gridcolumn', dataIndex: 'opettrc', text: 'Tiempo transcurrido'}, 
                {xtype: 'gridcolumn', dataIndex: 'opeestc', text: 'Estado actual'} 
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Iniciar',
                            handler: function() {
                                pars = new Object();
                                var fco_procedimiento = null;
                                fco_procedimiento = 'iniciarOperacion';

                                var l_opesel = this.up('grid').getSelectionModel().getSelection();

                                Ext.each(l_opesel, function (itemOpe) {
                                    var pars = new Object();
                                    pars.opekeyi = itemOpe.data.opekeyi;
                                    pars.s_user  = 'admin';

                                    Ext.Ajax.request({
                                        url: 'svr/src/ejecutarProcedimiento.php',
                                        method: 'GET',
                                        async: false,
                                        params : {
                                            'procedimiento': fco_procedimiento,
                                            'parametros': Ext.encode(pars)
                                        },            
                                        success: function(response, request){
                                            fco_StrOpe.load();
                                        },
                                        failure : function(response, request){
                                            Ext.Msg.alert("Mensaje de ERROR.", "No se ha podido iniciar la operación.");
                                            return false;
                                        }
                                    });
                                });

                            }

                        },
                        {
                            xtype: 'button',
                            text: 'Suspender'
                        },
                        {
                            xtype: 'button',
                            text: 'Finalizar'
                        },
                        {
                            xtype: 'datefield',
                            width: 220,
                            fieldLabel: 'Fecha de proceso',
                            labelWidth: 110,
                            disabled: true,
                            value: new Date()
                        },                        
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            text: 'Actualizar'
                        }
                    ]
                }
            ]
        }
    ]
});        
// Fin Formulario Control de operaciones