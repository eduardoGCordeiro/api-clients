'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('clientes',
			{
				codigo_cliente: {
					type: Sequelize.BIGINT.UNSIGNED,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
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
				},
				created_at: {
					type: Sequelize.DATE
				},
				updated_at: {
					type: Sequelize.DATE
				},
				deleted_at: {
					type: Sequelize.DATE
				}
			});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable('clientes');
	}
};
