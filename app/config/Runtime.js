/**
 * Created by RaM on 08/10/14.
 */

Ext.define('Matrix.config.Runtime', {
    singleton : true,
    config : {
        nombreAplicacion: 'Matrix Tomas',
        formularioActual: '',
        proyectoActual : 20,
        usuarioActual: 'invitado',
        usuarioIdActual: 0,
        sesionActual: 0
    },
    constructor : function(config){
        this.initConfig(config);
    }
});