/**
 * Created by Randiel on 21/09/14.
 */

Ext.define('fpg_MdlGlo', {
    extend: 'Ext.data.Model',
    fields: [
        {name:'glocodc', type: 'string'},
        {name:'glovalc', type: 'string'}
    ]
});

pars = new Object();
pars.tabla = 'TIPO_PROYECTO';
pars.combo = '%';
var fpg_StrTipPrj = Ext.create('Ext.data.Store', {
    model:'fpg_MdlGlo',
    autoload: true,
    proxy: {
        type: 'ajax',
        startParam:false,
        limitParam:false,
        noCache:false,
        pageParam:false,
        url: 'svr/src/ejecutarProcedimiento.php',
        extraParams: {
            'procedimiento': 'consultarGlosario',
            'parametros': Ext.encode(pars)
        },
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'rows'
        }
    }
});

pars = new Object();
pars.tabla = 'UNIDAD_CONSOLIDAR';
pars.combo = '%';
var fpg_StrConPor = Ext.create('Ext.data.Store', {
    model:'fpg_MdlGlo',
    autoload: true,
    proxy: {
        type: 'ajax',
        startParam:false,
        limitParam:false,
        noCache:false,
        pageParam:false,
        url: 'svr/src/ejecutarProcedimiento.php',
        extraParams: {
            'procedimiento': 'consultarGlosario',
            'parametros': Ext.encode(pars)
        },
        reader: {
            type: 'json',
            root: 'results',
            totalProperty: 'rows'
        }
    }
});

// Inicio Formulario Parametros generales
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'ParametrosGenerales',
    bodyPadding: 10,
    title: 'Parametros generales',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Flujo de trabajo',
            anchor: '60%',
            items: [
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Carga de datos',
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'fpg_parcar',
                            checked: true,
                            boxLabel: 'Archivo por archivo'
                        },
                        {
                            xtype: 'radiofield',
                            name: 'fpg_parcar',
                            boxLabel: 'Maestro unificado'
                        }
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Modo de lectura',
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'fpg_modlec',
                            checked: true,
                            boxLabel: 'Automatica'
                        },
                        {
                            xtype: 'radiofield',
                            name: 'fpg_modlec',
                            boxLabel: 'Lectura manual'
                        }
                    ]
                },
                {
                    xtype: 'combobox',
                    name: 'fpg_conpor',
                    anchor: '100%',
                    fieldLabel: 'Consolidar por',
                    store: fpg_StrConPor,
                    mode: 'local',
                    displayField: 'glovalc',
                    value: '(Ninguno)',
                    valueField: 'glovalc'
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Guardar',
                    handler: function(btn) {
                        pars = null;
                        pars = new Object();
                        var frl_procedimiento = null;
                        frl_procedimiento = 'guardarParametros';

                        var frm = null;
                        frm = btn.up('#ParametrosGenerales').getForm();

                        pars.p_car = frm.findField('fpg_parcar').getValue();
                        pars.p_lec = frm.findField('fpg_modlec').getValue();
                        pars.p_con = frm.findField('fpg_conpor').getValue();

                        pars.s_user = 'admin';

                        if (isempty(pars.p_car)) {
                            Ext.Msg.alert("Mensaje de Matrix Tomas", "Debe seleccionar el modo de carga de datos.");
                            return false;
                        }

                        if (isempty(pars.p_lec)) {
                            Ext.Msg.alert("Mensaje de Matrix Tomas", "Debe seleccionar el modo de lectura.");
                            return false;
                        }

                        if (pars.p_con === '(Ninguno)') {
                            Ext.Msg.alert("Mensaje de Matrix Tomas", "Debe elegir la unidad de consolidación.");
                            return false;
                        }

                        Ext.Ajax.request({
                            url: 'svr/src/ejecutarProcedimiento.php',
                            method: 'GET',
                            async: false,
                            params : {
                                'procedimiento': frl_procedimiento,
                                'parametros': Ext.encode(pars)
                            },
                            success: function(response, request){
                                Ext.Msg.alert('Mensaje de Matrix Tomas:', 'Se actualizaron los parámetros correctamente.');
                                frm.findField('fpg_parcar').setValue('');
                                frm.findField('fpg_modlec').setValue('');
                                frm.findField('fpg_conpor').setValue('');
                            },
                            failure : function(response, request){
                                Ext.Msg.alert("Mensaje de Matrix Tomas.", "Hubo errores en el proceso.");
                                return false;
                            }
                        });
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cerrar',
                    handler: function() {
                        this.up('.panel').close();
                    }
                }
            ]
        }
    ]
});
// Fin Formulario Parametros generales