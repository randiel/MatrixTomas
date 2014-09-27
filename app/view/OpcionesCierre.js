/**
 * Created by RaM on 27/09/14.
 */

    // Inicio Formulario Opciones de cierre
Ext.create('Ext.form.Panel', {
    xtype: 'form',
    itemId: 'OpcionesCierre',
    bodyPadding: 10,
    title: 'Opciones de cierre',
    closable: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Cierre de proyecto',
            items: [
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Unidades de cierre',
                    labelWidth: 150
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Validaciones',
            items: [
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se ha realizado la carga de archivos maestros.'
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se ha realizado el corte documentario.'
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se han finalizado todas las lecturas.'
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se han informado por correo el reporte final de diferencias.'
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se han calculado los indicadores.'
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: '',
                    labelWidth: 200,
                    boxLabel: 'Se ha generado el informe final al cliente.'
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
// Fin Formulario Opciones de cierre