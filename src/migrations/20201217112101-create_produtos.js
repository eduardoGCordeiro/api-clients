'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('produtos',
			{
				codigo_produto: {
					type: Sequelize.BIGINT.UNSIGNED,
					allowNull: false,
					primaryKey: true
				},
				nome: {
					type: Sequelize.STRING(100),
					allowNull: false
				},
				cor: {
					type: Sequelize.STRING(40),
					allowNull: false
				},
				tamanho: {
					type: Sequelize.STRING(40),
					allowNull: false
				},
				valor: {
					type: Sequelize.DOUBLE,
					allowNull: false
				}
			});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable('produtos');
	}
};
