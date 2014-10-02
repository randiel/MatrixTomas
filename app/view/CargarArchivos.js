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
                    name:'maestroProducto',
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
                    name:'maestroStock',
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
                    name:'maestroValor',
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
                    name:'maestroLectura',
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
