import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("cgb/block-calculadora-juros", {
	title: __("Calculadora de Juros Compostos"),
	icon: "calculator",
	category: "widget",
	edit: () => {
		return (
			<div>
				<div className="calculadora-juros-wrapper">
					<h3>Calculadora de Juros Compostos</h3>
				</div>
				<span className="calculadora-juros-info">
					O widget da calculadora será exibido no portal nesta mesma posição no
					conteúdo.
				</span>
			</div>
		);
	},
	save: () => {
		return <calculadora></calculadora>;
	},
});
