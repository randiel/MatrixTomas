/**
 * Created by RaM on 27/09/14.
 */

    // Inicio Formulario Localizaciones
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'Localizaciones',
    bodyPadding: 10,
    title: 'Localizaciones',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Datos de localizaciones',
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
                    fieldLabel: 'Tipo localizacion',
                    labelWidth: 120
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Ubicacion',
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
            title: 'Localizaciones',
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
                    text: 'Tipo localizacion'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Ubicacion'
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
// Fin Formulario Localizaciones