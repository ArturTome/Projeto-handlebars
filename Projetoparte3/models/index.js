const Cardapio = require('./cardapio.model');
const Entrada = require('./entrada.model');
const PratoPrincipal = require('./pratoPrincipal.model');
const Sobremesa = require('./sobremesa.model');

// CARDÁPIO POSSUI MUITAS COMIDAS
Cardapio.belongsToMany(Entrada, { through: 'CardapioEntradas' });
Entrada.belongsToMany(Cardapio, { through: 'CardapioEntradas' });

Cardapio.belongsToMany(PratoPrincipal, { through: 'CardapioPratos' });
PratoPrincipal.belongsToMany(Cardapio, { through: 'CardapioPratos' });

Cardapio.belongsToMany(Sobremesa, { through: 'CardapioSobremesas' });
Sobremesa.belongsToMany(Cardapio, { through: 'CardapioSobremesas' });

module.exports = {
    Cardapio,
    Entrada,
    PratoPrincipal,
    Sobremesa
};

