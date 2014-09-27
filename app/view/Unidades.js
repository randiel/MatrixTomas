/**
 * Created by RaM on 27/09/14.
 */

    // Inicio Formulario Unidades
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'Unidades',
    bodyPadding: 10,
    title: 'Unidades',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Datos de unidades',
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Nombre',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Descripcion',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Tipo producto',
                    labelWidth: 120
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Valor',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Normalizado',
                    labelWidth: 120
                }
            ]
        },
        {
            xtype: 'gridpanel',
            title: 'Unidades de medida',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Descripcion'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Tipo producto'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Valor'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Normalizado'
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
// Fin Formulario Unidades