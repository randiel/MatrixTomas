/**
 * Created by RaM on 27/09/14.
 */

    // Inicio Formulario Factores de conversion
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'FactoresConversion',
    bodyPadding: 10,
    title: 'Factores de conversion',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Datos de factores de conversion',
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Nombre',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Campo afectado',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Unidad origen',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Unidad destino',
                    labelWidth: 120
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    fieldLabel: 'Formula conversion',
                    labelWidth: 120
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: 'Factores de conversion',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Campo afectado'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Unidad origen'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Unidad destino'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Formula conversion'
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
                    text: 'Editar'
                },
                {
                    xtype: 'button',
                    text: 'Guardar'
                },
                {
                    xtype: 'button',
                    text: 'Cerrar'
                }
            ]
        }
    ]
});
// Fin Formulario Factores de conversion