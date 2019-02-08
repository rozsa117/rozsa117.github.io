var button = document.getElementById( "sidebarCollapse" );
 button.onclick = function() {
	classList.toggle( this, 'active' );
	classList.toggle( menuRight, 'cbp-spmenu-open' );
	//disableOther( 'showRight' );
};
