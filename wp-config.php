<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'cursoemvideowp' );
/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );
/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );
/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );
/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );
/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );
/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{taDmK!&?~9ytXi1@3.l-DA=qHQ_m8Pc.)tM*zvJMZQ=Kio)cdRuT!qW8P5214}!' );
define( 'SECURE_AUTH_KEY',  'O:s)N8]mvB:AX<:%]D~Xx5|}MdG!z}VzITKyTD>]hk68~4?D~g%f>Buc}^T9Be_X' );
define( 'LOGGED_IN_KEY',    '$EiGL[n!xYS}Wg#6nz>fJ fc8P1IXY 9?BW@N3PL5vGm3`<A}ln(x2}1F^+1yJ}@' );
define( 'NONCE_KEY',        't;U-7XG!ZnMqX !GceXKxJf$b2kr_Z[m#f@A2r0p:]FBA5/cZ&0kh7 =I `o9{P#' );
define( 'AUTH_SALT',        '|[yH?B(iDUV[#RD8lCwDm$:sNMb-|8g>Q!bJ<v@b6UTFISp9i@85)5V}X1m*Bb|k' );
define( 'SECURE_AUTH_SALT', 'Q`#E|nY^t|lKzXOBQ4o{h[6?u#T43$7[Vz*(a2RlXJTSuIsOi?G^gVY1hTDZ;2SL' );
define( 'LOGGED_IN_SALT',   '>>yo7}8Y*Hz$IqAdMG3Sg=qL60JXoLk ={q%XMn>sR]P,B-~rfZUQ`T6euMQYXk4' );
define( 'NONCE_SALT',       'i a,sJ~-qC&hN-:98^Mkf|;$Xg&{C>[MI0l.zCN{0YSv#B=0{Y1X-R_{]elONn9|' );
/**#@-*/
/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';
/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Adicione valores personalizados entre esta linha até "Isto é tudo". */
/* Isto é tudo, pode parar de editar! :) */
/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
