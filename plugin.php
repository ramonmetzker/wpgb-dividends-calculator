<?php
/**
 * Plugin Name: Calculadora de Juros Compostos
 * Plugin URI: http://blacklab.ventures/
 * Description: Calculadora de Juros é um bloco Gutenberg criado para identificar a posição onde a calculadora deverá ser exibida no conteúdo.
 * Author: Ramon Metzker
 * Author URI: https://github.com/ramonmetzker
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
