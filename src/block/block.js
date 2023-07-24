import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("cgb/block-calculadora-dividendos", {
	title: __("Calculadora de Dividendos"),
	icon: "calculator",
	category: "widget",
	edit: () => {
		return (
			<div>
				<div className="calculadora-dividendos-wrapper">
					<h3>Calculadora de Dividendos</h3>
				</div>
				<span className="calculadora-dividendos-info">
					O widget da calculadora será exibido no portal nesta mesma posição no
					conteúdo.
				</span>
			</div>
		);
	},
	save: () => {
		return <calculadora-div></calculadora-div>;
	},
});
