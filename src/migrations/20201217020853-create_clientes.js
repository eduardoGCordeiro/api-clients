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
				nome: {
					type: Sequelize.STRING(100),
					allowNull: false
				},
				cpf: {
					type: Sequelize.STRING(11),
					allowNull: false
				},
				sexo: {
					type: Sequelize.STRING(1),
					allowNull: false
				},
				email: {
					type: Sequelize.STRING(100),
					allowNull: false
				}
			});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable('clientes');
	}
};
