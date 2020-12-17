'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('clientes',
			{
				codigo_cliente: {
					type: Sequelize.BIGINT,
					allowNull: false,
					primaryKey: true
				},
				nome: Sequelize.STRING(100),
				cpf: Sequelize.STRING(11),
				sexo: Sequelize.STRING(1),
				email: Sequelize.STRING(100)
			});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable('clientes');
	}
};
