/**
 * Created by RaM on 27/09/14.
 */

// Inicio Formulario Personal asignado
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'PersonalAsignado',
    bodyPadding: 10,
    title: 'Personal asignado',
    closable: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Agregar'
                },
                {
                    xtype: 'button',
                    text: 'Remover'
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
    ],
    items: [
        {
            xtype: 'gridpanel',
            title: 'Personal asignado',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Nombre'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Usuario'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Equipo'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'string',
                    text: 'Ubicaciones asignadas'
                }
            ]
        }
    ]
});
// Fin Formulario Personal asignado
