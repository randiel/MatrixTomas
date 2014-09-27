/**
 * Created by Toshiba on 26/09/14.
 */

// Inicio Formulario Cargar archivos
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'CargarArchivos',
    bodyPadding: 10,
    title: 'Cargar archivos',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Maestro de productos',
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Archivo origen',
                    buttonText: 'Abrir...'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Elegir hoja'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Maestro de stock',
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Archivo origen',
                    buttonText: 'Abrir...'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Elegir hoja'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Maestro de valorizaciones',
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Archivo origen',
                    buttonText: 'Abrir...'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Elegir hoja'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Maestro de lectura',
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: 'Archivo origen',
                    buttonText: 'Abrir...'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Elegir hoja'
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
                    text: 'Cargar'
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
