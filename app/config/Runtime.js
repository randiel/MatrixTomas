/**
 * Created by RaM on 08/10/14.
 */

Ext.define('Matrix.config.Runtime', {
    singleton : true,
    config : {
        nombreAplicacion: 'Matrix Tomas',
        formularioActual: '',
        proyectoActual : 20,
        usuarioActual: 'invitado'
    },
    constructor : function(config){
        this.initConfig(config);
    }
});