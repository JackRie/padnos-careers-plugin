<?php
/**
 * Plugin Name: Padnos Careers Plugin
 * Plugin URI: www.plugin.com
 * Description: A plugin build for Padnos that integrates with their Greenhouse Careers Board API.
 * Author: Jackie Riemersma
 * Version: 1.0.0
 * Text-Domain: padnos-cp
 */

//  No direct access allowed
if( !defined('ABSPATH') ) {
    exit();
}

//  Define plugin constants
define('PADNOSCP_PATH', trailingslashit( plugin_dir_path(__FILE__) ));
define('PADNOSCP_URL', trailingslashit( plugins_url('/', __FILE__) ));
$hello = "hello";

function padnos_cp_load_scripts() {
    wp_enqueue_script('padnos-careers-scripts', PADNOSCP_URL . '/build/index.js', array('jquery', 'wp-blocks', 'wp-element', 'wp-editor'), '1.0', true);

    wp_enqueue_style('padnos-careers-styles', PADNOSCP_URL . '/build/index.css');
  
}

add_action('wp_enqueue_scripts', 'padnos_cp_load_scripts');

function padnos_cp_register_shortcode() {
    add_shortcode('padnos-careers', 'padnos_cp_api_shortcode');
}

function padnos_cp_api_shortcode() {
    $output = '<div id="grnhse_app"></div>';
    return $output;
}

add_action('init', 'padnos_cp_register_shortcode');